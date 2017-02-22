//
//  GetGitHubHTML.swift
//  ManfreddsAirport
//
//  Created by Dunc on 2/15/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class GetGitHubHTML : Network {
    init(success successCallback: @escaping NetworkCallback, failure failureCallback: @escaping VoidCallback) throws {
        let url = URL(string: Domain.GitHub)!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        super.init(request: request, responseCompletionHandler: { data, response in
            let responseHTML = String(data: data!, encoding: String.Encoding.utf8)
            
            successCallback(responseHTML!)
        }, responseErrorHander: { error in
            failureCallback()
        })
    }
}
