//
//  GetCats.swift
//  ManfreddsAirport
//
//  Created by Dunc on 4/11/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

enum CatError: Error {
    case CatVomit
}

class GetCats : Network {
    init(success successCallback: @escaping StringCallback, failure failureCallback: @escaping VoidCallback) {
        let url = URL(string: Domain.Tuskss + "/api/cats")!
        var request = URLRequest(url: url)
        
        request.httpMethod = HTTPMethod.GET
        
        super.init(request: request, callback: { (data, response, error) in
            guard error == nil, let responseString = String(data: data!, encoding: String.Encoding.utf8) else {
                failureCallback()
                return
            }
            
            successCallback(responseString)
        })
    }
}
