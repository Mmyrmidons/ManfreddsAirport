//
//  PostCats.swift
//  ManfreddsAirport
//
//  Created by Dunc on 4/12/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

class PostCats : Network {
    init(success successCallback: @escaping StringCallback, failure failureCallback: @escaping VoidCallback) {
        let url = URL(string: Domain.Tuskss + "/api/cats")!
        var request = URLRequest(url: url)
        
        let json = ["linus": "Mistr Linus", "poopy": "The Poupster"]
        
        guard let jsonData = try? JSONSerialization.data(withJSONObject: json) else {
            super.init()
            failureCallback()

            return
        }
        
        request.httpMethod = HTTPMethod.POST
        request.setValue("application/json; charset=utf-8", forHTTPHeaderField:"Content-Type")
        request.httpBody = jsonData
        
        super.init(request: request, callback: { (data, response, error) in
            guard error == nil, let responseString = String(data: data!, encoding: String.Encoding.utf8) else {
                failureCallback()
                return
            }
            
            successCallback(responseString)
        })
    }
}
