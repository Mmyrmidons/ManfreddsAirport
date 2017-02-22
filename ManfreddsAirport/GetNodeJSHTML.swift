//
//  GetNodeJSHTML.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/31/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class GetNodeJSHTML : Network {
    var request:URLRequest
    
    override init?() {
        let url = URL(string: Domain.NodeJS)!

        self.request = URLRequest(url: url)
        self.request.httpMethod = HTTPMethod.GET

        super.init()
    }
    
    func fetch(success successCallback: @escaping NetworkCallback, failure failureCallback: @escaping VoidCallback) {
        super.fetch(request: request, callback: { (data, response, error) in
            guard let responseHTML = String(data: data!, encoding: String.Encoding.utf8) else {
                if let responseError = error {
                    print(responseError.localizedDescription)
                }
                
                failureCallback()

                return
            }

            successCallback(responseHTML)
        })
    }
}
