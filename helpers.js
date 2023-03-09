exports.getPoolImmutables = async(poolContract) =>{
    const [token0, token1, fee] = await Promise.all([
        poolContract.token0,
        poolContract.token1,
        poolContract.fee
    ])
}