//
//  CoreDataManager.swift
//  ManfreddsAirport
//
//  Created by Dunc on 2/22/17.
//  Copyright © 2017 Mmyrmidons. All rights reserved.
//

import Foundation
import CoreData

enum CoreDataError: Error {
    case Fetch
    case BatchDelete
}

class CoreDataManager {
    static let sharedInstance : CoreDataManager = {
        let instance = CoreDataManager()
        return instance
    }()
    
    var context : NSManagedObjectContext {
        return persistentContainer.viewContext
    }
    
    var slotsData: Data? {
        get {
            do {
                let playlistFetchRequest = NSFetchRequest<PlayingToday>(entityName: String(describing: PlayingToday.self))
                let fetchedPlaylists = try context.fetch(playlistFetchRequest)
            
                if fetchedPlaylists.count > 0, let fetchedPlaylist = fetchedPlaylists[0] as PlayingToday? {
                    let todaysComponents = NSCalendar.current.dateComponents([.day, .month, .year, .era], from: Date())
                    let timestampedComonents = NSCalendar.current.dateComponents([.day, .month, .year, .era], from: fetchedPlaylist.timeStamp as! Date)
                    
                    if todaysComponents == timestampedComonents
                        { return fetchedPlaylist.jsonData as Data? }
                    
                    deleteEntities(fetchRequest: playlistFetchRequest)
                }
            } catch { print("\(error)") }
        
            return nil
        } set(data) {
            deleteEntities(fetchRequest: NSFetchRequest<PlayingToday>(entityName: String(describing: PlayingToday.self)))
        
            let playingToday = PlayingToday(context: context)
        
            playingToday.jsonData = NSData(data: data!)
            playingToday.timeStamp = NSDate()
        
            saveContext()
        }
    }
    
    func deleteEntities<T>(fetchRequest: NSFetchRequest<T>) {
        let deleteRequest = NSBatchDeleteRequest(fetchRequest: fetchRequest as! NSFetchRequest<NSFetchRequestResult>)
        
        do { try context.execute(deleteRequest) }
        catch { print("\(error)") }
    }

    // MARK: - Core Data stack
    
    lazy var persistentContainer: NSPersistentContainer = {
        /*
         The persistent container for the application. This implementation
         creates and returns a container, having loaded the store for the
         application to it. This property is optional since there are legitimate
         error conditions that could cause the creation of the store to fail.
         */
        let container = NSPersistentContainer(name: "ManfreddsAirport")
        container.loadPersistentStores(completionHandler: { (storeDescription, error) in
            if let error = error as NSError? {
                // Replace this implementation with code to handle the error appropriately.
                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                
                /*
                 Typical reasons for an error here include:
                 * The parent directory does not exist, cannot be created, or disallows writing.
                 * The persistent store is not accessible, due to permissions or data protection when the device is locked.
                 * The device is out of space.
                 * The store could not be migrated to the current model version.
                 Check the error message to determine what the actual problem was.
                 */
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        })
        return container
    }()
    
    // MARK: - Core Data Saving support
    
    func saveContext () {
        let context = persistentContainer.viewContext
        if context.hasChanges {
            do {
                try context.save()
            } catch {
                // Replace this implementation with code to handle the error appropriately.
                // fatalError() causes the application to generate a crash log and terminate. You should not use this function in a shipping application, although it may be useful during development.
                let nserror = error as NSError
                fatalError("Unresolved error \(nserror), \(nserror.userInfo)")
            }
        }
    }
}
