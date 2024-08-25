                  {/* Conditionally render the username */}
                  {user?.username ? (
                    <Text className="text-sm text-red-300 font-nunito-medium">
                      {user.username}
                    </Text>
                  ) : (
                    <Text className="text-sm text-gray-400 font-nunito-extralight py-2">
                      UnRegistered User
                    </Text>
                  )}