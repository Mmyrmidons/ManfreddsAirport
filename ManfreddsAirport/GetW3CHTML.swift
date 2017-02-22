//
//  GetW3CHTML.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/31/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class GetW3CHTML : Network {
    init(success successCallback: @escaping NetworkCallback, failure failureCallback: @escaping VoidCallback) {
        let url = URL(string: Domain.W3)!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET

        super.init(request: request, callback: { (data, response, error) in
            guard let responseHTML = String(data: data!, encoding: String.Encoding.utf8) else {
                failureCallback()
                return
            }
            
            successCallback(responseHTML)
        })
    }
}
