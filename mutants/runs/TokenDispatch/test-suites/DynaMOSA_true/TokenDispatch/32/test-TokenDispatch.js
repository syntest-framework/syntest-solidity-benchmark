const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatch0gZoMh = await TokenDispatch.new({from: accounts[2]});
		const uintJhPOn2w = BigInt("88")
		const uintjxphJ3l = BigInt("60")
		const uintO1P6vQc = BigInt("192")
		const uintUcJvCW8 = BigInt("236")
		const uint256Cr3q7G = await TokenDispatch0gZoMh.claimedOf.call(uintJhPOn2w, {from: accounts[2]});
		const uint8dwUGLLR = await TokenDispatch0gZoMh.claim.call(uintjxphJ3l, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Al5mK7f = await TokenDispatch0gZoMh.balanceOf.call(uintO1P6vQc, {from: accounts[0]});
		const uint256HfsPxry = await TokenDispatch0gZoMh.nextClaimHeightOf.call(uintUcJvCW8, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchB9yt053 = await TokenDispatch.new({from: accounts[1]});
		const addressXrkipld = accounts[0]
		const addressjiaNwbk = accounts[2]
		const uintVoOdNdI = BigInt("169")
		const uintW1uWwhU = BigInt("236")
		const uintZcbDF1g = BigInt("246")
		const uintTlajL1k = BigInt("25")
		const uintdu3qPC1 = BigInt("250")
		const uintx7oUs8 = BigInt("3")
		const uint256MvHdpx7 = await TokenDispatchB9yt053.updateTeam.call(uintVoOdNdI, addressjiaNwbk, addressXrkipld, {from: accounts[3]});
		const uint256cBrBV8p = await TokenDispatchB9yt053.nextClaimHeightOf.call(uintW1uWwhU, {from: accounts[4]});
		const uint8xuoszRM = await TokenDispatchB9yt053.claim.call(uintZcbDF1g, {from: accounts[1]});
		const uint256OVC0CJy = await TokenDispatchB9yt053.claimedOf.call(uintTlajL1k, {from: accounts[0]});
		const uint256TNZJQId = await TokenDispatchB9yt053.claimedOf.call(uintdu3qPC1, {from: accounts[1]});
		const uint256nMqhGX8 = await TokenDispatchB9yt053.claimedOf.call(uintx7oUs8, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchepcpDb = await TokenDispatch.new({from: accounts[4]});
		const uintYhOJBd3 = BigInt("29")
		const uintVB7xKwE = BigInt("25")
		const uintCWsV42Q = BigInt("198")
		const uint8tSeRmVC = await TokenDispatchepcpDb.claim.call(uintYhOJBd3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eLYDCou = await TokenDispatchepcpDb.balanceOf.call(uintVB7xKwE, {from: accounts[0]});
		const uint8rjg1kXF = await TokenDispatchepcpDb.claim.call(uintCWsV42Q, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchHsKf9qN = await TokenDispatch.new({from: accounts[4]});
		const uintflMnIS = BigInt("130")
		const uinteQrOxzt = BigInt("42")
		const addresszvth1u4 = accounts[5]
		const addressFJMvEc = accounts[3]
		const uintxPmLT4z = BigInt("153")
		const uintvZfIT2H = BigInt("4")
		const uintswnUlGw = BigInt("3")
		const uint256JkxWxS = await TokenDispatchHsKf9qN.nextClaimHeightOf.call(uintflMnIS, {from: accounts[0]});
		const uint256fKVaNgu = await TokenDispatchHsKf9qN.claimedOf.call(uinteQrOxzt, {from: accounts[5]});
		const uint256h4YDjZY = await TokenDispatchHsKf9qN.updateTeam.call(uintxPmLT4z, addressFJMvEc, addresszvth1u4, {from: accounts[2]});
		const uint256h2jW8vK = await TokenDispatchHsKf9qN.balanceOf.call(uintvZfIT2H, {from: accounts[3]});
		const uint2569VvJgC = await TokenDispatchHsKf9qN.nextClaimHeightOf.call(uintswnUlGw, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchAun3oQp = await TokenDispatch.new({from: accounts[0]});
		const uintDQ6il5D = BigInt("60")
		const uintlKLYSCA = BigInt("137")
		const 
u0bViES = await TokenDispatchAun3oQp.teamOf.call(uintDQ6il5D, {from: accounts[4]});
		const uint256WAA3X64 = await TokenDispatchAun3oQp.nextClaimHeightOf.call(uintlKLYSCA, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchHsKf9qN = await TokenDispatch.new({from: accounts[4]});
		const uintZt0ReOe = BigInt("1549")
		const addressHEvfJzk = accounts[4]
		const addresscGt6ITu = accounts[5]
		const uintQUVGo3 = BigInt("184")
		const uintYe79rHX = BigInt("130")
		const uintlYdJDPH = BigInt("42")
		const uintaSdBuPA = BigInt("14")
		const addressxjnnoi = accounts[5]
		const addressbIhl46t = accounts[3]
		const uintFlm2IvU = BigInt("155")
		const uintWD5zWYW = BigInt("4")
		const uintfztG2KO = BigInt("3")
		const addressT2c7pSq = await TokenDispatchHsKf9qN.approve.call(addresscGt6ITu, addressHEvfJzk, uintZt0ReOe, {from: accounts[3]});
		const uint256ybymRx4 = await TokenDispatchHsKf9qN.nextClaimHeightOf.call(uintQUVGo3, {from: accounts[3]});
		const uint256JkxWxS = await TokenDispatchHsKf9qN.nextClaimHeightOf.call(uintYe79rHX, {from: accounts[0]});
		const uint256fKVaNgu = await TokenDispatchHsKf9qN.claimedOf.call(uintlYdJDPH, {from: accounts[5]});
		const uint8HsNnN3E = await TokenDispatchHsKf9qN.claim.call(uintaSdBuPA, {from: accounts[5]});
		const uint256h4YDjZY = await TokenDispatchHsKf9qN.updateTeam.call(uintFlm2IvU, addressbIhl46t, addressxjnnoi, {from: accounts[2]});
		const uint256h2jW8vK = await TokenDispatchHsKf9qN.balanceOf.call(uintWD5zWYW, {from: accounts[3]});
		const uint2569VvJgC = await TokenDispatchHsKf9qN.nextClaimHeightOf.call(uintfztG2KO, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchAun3oQp = await TokenDispatch.new({from: accounts[0]});
		const uintTkkxweG = BigInt("170")
		const uintTjlkVb = BigInt("112")
		const uint2568eiBQF = await TokenDispatchAun3oQp.balanceOf.call(uintTkkxweG, {from: accounts[0]});
		const uint8FsMmWgZ = await TokenDispatchAun3oQp.claim.call(uintTjlkVb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchAun3oQp = await TokenDispatch.new({from: accounts[0]});
		const uintFR0BVj6 = BigInt("1616")
		const addressPMlHFni = accounts[1]
		const addressA4mKc0c = accounts[1]
		const uintAQXctq = BigInt("60")
		const addressL07jYS = await TokenDispatchAun3oQp.approve.call(addressA4mKc0c, addressPMlHFni, uintFR0BVj6, {from: accounts[0]});
		const 
u0bViES = await TokenDispatchAun3oQp.teamOf.call(uintAQXctq, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchlP5G4yH = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZBSlPYG = BigInt("51")
		const uintM9Law6 = BigInt("47")
		const uint256mGrp64Q = await TokenDispatchlP5G4yH.nextClaimHeightOf.call(uintZBSlPYG, {from: accounts[4]});
		const uint8QzH3XJ = await TokenDispatchlP5G4yH.claim.call(uintM9Law6, {from: accounts[0]});
	});
})