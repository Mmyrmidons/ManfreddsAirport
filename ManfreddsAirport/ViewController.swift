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
        
        
//        do {
//            _ = try GetGitHubHTML(success: { responseString in
//                print("Miss Pooh GitHub Success: \(responseString)")
//            }, failure: {
//                self.gitHubFailure()
//            })
//        } catch let error as Error {
//            self.gitHubFailure()
//        }
//        

//        if let node = GetNodeJSHTML() {
//            node.fetch(success: { responseString in
//                print("Miss Pooh \(node) Success: \(responseString)")
//            }, failure: {
//                self.nodeFailure()
//            })
//        } else {
//            self.nodeFailure()
//        }
        
        _ = GetWhatsPlayingTodayOnWFMU(success: { slots in
            for slot in slots {
                if let show = slot["show"] as! [String:Any]?, let title = show["title"] {
                    print("Miss Pooh Playing Today Success: \(title)")
                } else {
                    print("Miss Pooh Title Error")
                }
            }
        }, failure: {
            print("Miss Pooh Playing Today Error")
        })
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func nodeFailure() {
        print("Miss Pooh Node Error")
    }
    
    func gitHubFailure() {
        print("Miss Pooh GitHub Error")
    }
}

