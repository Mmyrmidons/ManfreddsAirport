//
//  GetGitHubHTML.swift
//  ManfreddsAirport
//
//  Created by Dunc on 2/15/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class GetGitHubHTML : Network {
    init(success successCallback: @escaping VoidCallback, failure failureCallback: @escaping VoidCallback) throws {
        let url = URL(string: Domain.GitHub)!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        
        super.init(request: request, callback: { (data, response, error) in
//            guard let responseHTML = String(data: data!, encoding: String.Encoding.utf8) else {
//                failureCallback()
//                return
//            }
//            
//            successCallback()
        })
    }
}
