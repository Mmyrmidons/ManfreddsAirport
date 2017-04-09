//
//  GetWhatsPlayingTodayOnWFMU.swift
//  ManfreddsAirport
//
//  Created by Dunc on 2/21/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation
import CoreData

enum WFMUError: Error {
    case SlotParseError
}

typealias SlotsCallback = ([Slot]) -> ()

struct Slot {
    let title:String
    let description:String
    let when:Date
    
    static func generateSlotlings(jsonDictionary: [String:Any]) throws -> [Slot]? {
        var slots:[Slot] = []
        
//        throw WFMUError.SlotParseError
        
        if let slotz = jsonDictionary["slot"] as? [[String:Any]] {
            for slot in slotz {
                let emptyString:String? = ""
            
                if let show = slot["show"] as? [String:Any],
                    let title = show["title"] as? String ?? emptyString,
                    let description = show["description"] as? String ?? emptyString,
                    let dateRange = slot["dateRange"] as? [String:Any],
                    let startDatetime = dateRange["startDatetime"] as? [String:Any],
                    let attributes = startDatetime["@attributes"] as? [String:Any],
                    let unixTimestamp = attributes["unixTimestamp"] as? String,
                    let doubleUnixTimestamp = Double(unixTimestamp) {
                        slots.append(Slot(title: title, description: description, when: NSDate(timeIntervalSince1970: doubleUnixTimestamp) as Date))
                } else { throw WFMUError.SlotParseError }
            }
        } else { throw WFMUError.SlotParseError }

        return slots
    }
}

class GetWhatsPlayingTodayOnWFMU : Network {

//    Dispatch Background


    init(success successCallback: @escaping SlotsCallback, failure failureCallback: @escaping ErrorCallback) {
        func serializeSlots(data: Data) throws -> [Slot]? {
            do {
                let jsonDictionary = try JSONSerialization.jsonObject(with: data, options: []) as? [String:Any]
                
                do {
                    let slotlings = try Slot.generateSlotlings(jsonDictionary: jsonDictionary!)
                    
                    return slotlings
                } catch  { throw error }
            } catch { throw error }
        }
        
        if let slotsData = CoreDataManager.sharedInstance.slotsData {
            do {
                let slotFamily = try serializeSlots(data: slotsData)
            
                super.init()
                successCallback(slotFamily!)
                print("Miss Piglet Caches")
                
                return
            } catch { print("\(error)") }
        }

        let date = Date()
        let since1970 = "?_=" + String(date.timeIntervalSince1970 * 100000)
        let path = "/wp-content/themes/wfmu-theme/library/php/includes/playingToday.php"
        let url = URL(string: Domain.WFMU + path + since1970)!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        super.init(request: request, callback: { (data, response, error) in
            if let responseError = error {
                failureCallback(responseError)
                return;
            }
            
            do {
                let slotFamily = try serializeSlots(data: data!)

                successCallback(slotFamily!)
                CoreDataManager.sharedInstance.slotsData = data
                print("Miss Piglet Endpoints")
            } catch { failureCallback(error) }
        })
    }
}
