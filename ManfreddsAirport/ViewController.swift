//
//  ViewController.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/30/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        _ = GetNodeJSHTML(success: { htmlString in
            print("Miss Piglet: \(htmlString)")
        }, failure: { print("\(NodeJSError.NodeJSFailure)") })

        _ = GetWhatsPlayingTodayOnWFMU(success: { slots in
            for slot in slots {
                let dateFormatter = DateFormatter()

                dateFormatter.dateStyle = .long
                dateFormatter.timeStyle = .medium
                
                print("Miss Pooh: \(slot.title) on \(dateFormatter.string(from:slot.when))")
            }
        }, failure: { error in print("\(error)") })
    }
    
    @IBAction func hiMissTikkie(_ sender: Any) {
        print("Hi Miss Tikkie \(sender)")
    }
}

