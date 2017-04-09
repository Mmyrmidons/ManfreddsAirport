//
//  GetNodeJSHTML.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/31/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

enum NodeJSError: Error {
    case NodeJSFailure
}

class GetNodeJSHTML : Network {
    init(success successCallback: @escaping HTMLStringCallback, failure failureCallback: @escaping VoidCallback) {
        let url = URL(string: Domain.NodeJS)!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        super.init(request: request, callback: { (data, response, error) in
            guard error == nil, let responseHTML = String(data: data!, encoding: String.Encoding.utf8) else {
                failureCallback()
                return
            }
            
            successCallback(responseHTML)
        })
    }
}
