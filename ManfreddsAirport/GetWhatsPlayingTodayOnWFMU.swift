//
//  GetWhatsPlayingTodayOnWFMU.swift
//  ManfreddsAirport
//
//  Created by Dunc on 2/21/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

typealias SlotsCallback = ([[String:Any]]) -> ()

class GetWhatsPlayingTodayOnWFMU : Network {
    init(success successCallback: @escaping SlotsCallback, failure failureCallback: @escaping VoidCallback) {
        let date = Date()
        
        
        
        
        
        
        
        
        
        let since1970 = "?_=" + String(date.timeIntervalSince1970 * 100000)
        let path = "/wp-content/themes/wfmu-theme/library/php/includes/playingToday.php"
        let url = URL(string: Domain.WFMU + path + since1970)!
        
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        
        super.init(request: request, callback: { (data, response, error) in
            if let responseError = error {
                print(responseError)
                failureCallback()
                return;
            }
            
            do {
                let jsonData = try JSONSerialization.jsonObject(with: data!, options: []) as? [String:Any]
                
                if let slots = jsonData!["slot"] as? [[String:Any]] {
                    successCallback(slots)
                    
                    if let dateRange = slots[0]["dateRange"] as? [String:Any],
                    let startDatetime = dateRange["startDatetime"] as? [String:Any],
                    let attributes = startDatetime["@attributes"] as? [String:String],
                    let unixTimestamp = attributes["unixTimestamp"],
                    let doubleUnixTimestamp = Double(unixTimestamp) {
                        let date = Date(timeIntervalSince1970: doubleUnixTimestamp)
                        print("Manners: \(date) :::: \(unixTimestamp)")
                    }
                        
                    
                    
                    
                } else {
                    print("Failed to parse \(request.url!.absoluteString)")
                    failureCallback()
                }
            } catch let parseError {
                print(parseError)
                failureCallback()
            }
        })
    }
}
