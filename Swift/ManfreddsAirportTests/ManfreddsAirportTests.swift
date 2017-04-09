//
//  ManfreddsAirportTests.swift
//  ManfreddsAirportTests
//
//  Created by Dunc on 1/30/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import XCTest
@testable import ManfreddsAirport

class ManfreddsAirportTests: XCTestCase {
    var getNode:GetNodeJSHTML!
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testManners() {
        let expect = expectation(description: "Wait for Node JS")
        
        getNode = GetNodeJSHTML(success: { htmlString in
            print("Miss Piglet: \(htmlString)")
            
            XCTAssertNotNil(htmlString)
            
            expect.fulfill()
        }, failure: { print("\(NodeJSError.NodeJSFailure)") })

        waitForExpectations(timeout: 11, handler: nil)
        
        XCTAssertNotNil(getNode)
    }

    func testUsingMockURLSession() {
        guard let url = URL(string: Domain.NodeJS) else {
            XCTFail()
            return
        }
        
        let request = URLRequest(url: url)
        
        let mockSession = MockURLSession()
        XCTAssertFalse(mockSession.dataTask.resumeGotCalled)
        XCTAssertNil(mockSession.url)
        
        let task = mockSession.dataTask(with: request) { (data, response, error) in }
        task.resume()
        
        XCTAssertTrue(mockSession.dataTask.resumeGotCalled)
        XCTAssertEqual(mockSession.url, url)
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.

            self.getNode = GetNodeJSHTML(success: { htmlString in }, failure: { print("\(NodeJSError.NodeJSFailure)") })
        }
    }
}

class MockURLSession: URLSession {
    var url: URL?
    var dataTask = MockURLSessionTask()
    
    override func dataTask(with request: URLRequest, completionHandler: @escaping (Data?, URLResponse?, Error?) -> Void) -> MockURLSessionTask {
        self.url = request.url
        return dataTask
    }
}

class MockURLSessionTask: URLSessionDataTask {
    var resumeGotCalled = false
    
    override func resume() {
        resumeGotCalled = true
    }
}
