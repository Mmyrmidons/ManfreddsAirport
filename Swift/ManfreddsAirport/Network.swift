//
//  Network.swift
//  ManfreddsAirport
//
//  Created by Dunc on 1/30/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation

enum NetworkError: Error {
    case JSONSerializationError
    case JSONParseError
    case ResponseError
}

enum Domain {
    static let NodeJS = "https://nodejs.org/en/"
    static let W3 = "https://www.w3.org/"
    static let GitHub = "https://github.com/"
    static let WFMU = "https://wfmu.org/"
    static let Tuskss = "http://localhost:3099"
    static let Tusksss = "https://localhost:3098"
}

enum HTTPMethod {
    static let GET = "GET"
    static let POST = "POST"
    static let PUT = "PUT"
    static let DELETE = "DELETE"
}

typealias URLSessionCallback = (Data?, URLResponse?, Error?) -> ()
typealias StringCallback = (String) -> ()

class Network {
    init() {}

    init(request: URLRequest, callback: @escaping URLSessionCallback) {
        let task = URLSession.shared.dataTask(with: request, completionHandler: { (data, response, error) in
            if let responseError = error {
                print("\(NetworkError.ResponseError) :::: \(responseError)")
            }
            
            callback(data, response, error)
        })
        
        task.resume()
    }
}
