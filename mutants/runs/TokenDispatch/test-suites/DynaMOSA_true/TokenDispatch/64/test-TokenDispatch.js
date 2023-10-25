const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchzfPSc9q = await TokenDispatch.new({from: accounts[0]});
		const uintPKLKqy4 = BigInt("248")
		const uinti4QUfhI = BigInt("108")
		const uintL6rLY8j = BigInt("184")
		const uintKYDLcQl = BigInt("199")
		const uint256jhE8ciG = await TokenDispatchzfPSc9q.claimedOf.call(uintPKLKqy4, {from: accounts[0]});
		const uint256UT2EQ3p = await TokenDispatchzfPSc9q.balanceOf.call(uinti4QUfhI, {from: accounts[1]});
		const 
dgg7o9B = await TokenDispatchzfPSc9q.teamOf.call(uintL6rLY8j, {from: accounts[1]});
		const uint8Bd9qCP3 = await TokenDispatchzfPSc9q.claim.call(uintKYDLcQl, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLl31Kh6 = await TokenDispatch.new({from: accounts[2]});
		const uintetY1wGn = BigInt("12")
		const uintGFKW0n = BigInt("96")
		const uint8g3ivOJX = await TokenDispatchLl31Kh6.claim.call(uintetY1wGn, {from: accounts[4]});
		const uint256AfXhb7 = await TokenDispatchLl31Kh6.nextClaimHeightOf.call(uintGFKW0n, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchSwur9dX = await TokenDispatch.new({from: accounts[0]});
		const uintRRW3kvS = BigInt("488")
		const uintGSVOhOq = BigInt("90")
		const uintm8RBEjU = BigInt("20")
		const uintG5z81Kd = await TokenDispatchSwur9dX.signTransaction.call(uintRRW3kvS, {from: accounts[1]});
		const uint256i41pPLG = await TokenDispatchSwur9dX.nextClaimHeightOf.call(uintGSVOhOq, {from: accounts[0]});
		const uint256qMHkUQl = await TokenDispatchSwur9dX.nextClaimHeightOf.call(uintm8RBEjU, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchjwHYwYm = await TokenDispatch.new({from: accounts[2]});
		const uintBXqAFTI = BigInt("229")
		const uinty6pSHug = BigInt("23")
		const addresstCgTMvk = accounts[5]
		const addressC3ZN7P = "0x0000000000000000000000000000000000000001"
		const uintGZTfy2Z = BigInt("63")
		const uinthdJxfIP = BigInt("1941")
		const addressJsGSebI = accounts[1]
		const addressrYKh5r8 = accounts[1]
		const uint256DHlJYl7 = await TokenDispatchjwHYwYm.nextClaimHeightOf.call(uintBXqAFTI, {from: accounts[0]});
		const uint8yfX3aP3 = await TokenDispatchjwHYwYm.claim.call(uinty6pSHug, {from: accounts[5]});
		const uint256gpuF1vv = await TokenDispatchjwHYwYm.updateTeam.call(uintGZTfy2Z, addressC3ZN7P, addresstCgTMvk, {from: accounts[4]});
		const addresswE2sUbJ = await TokenDispatchjwHYwYm.approve.call(addressrYKh5r8, addressJsGSebI, uinthdJxfIP, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchZWWPp48 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrCmDEhe = BigInt("153")
		const uintv9ictpe = BigInt("111")
		const uintG6O21LP = BigInt("16")
		const addressh57PPBE = accounts[0]
		const addressULGK8ac = accounts[2]
		const uintmjWWVhC = BigInt("219")
		const addresscC5RLJL = accounts[2]
		const addressPf6mWq = accounts[3]
		const uintRV0U46 = BigInt("117")
		const uinth4oDLOC = BigInt("13")
		const uint8gS2gDcl = await TokenDispatchZWWPp48.claim.call(uintrCmDEhe, {from: accounts[5]});
		const uint256XziVI3D = await TokenDispatchZWWPp48.claimedOf.call(uintv9ictpe, {from: accounts[0]});
		const uint256B9m4Lcm = await TokenDispatchZWWPp48.claimedOf.call(uintG6O21LP, {from: accounts[1]});
		const uint256xhFKxWC = await TokenDispatchZWWPp48.updateTeam.call(uintmjWWVhC, addressULGK8ac, addressh57PPBE, {from: accounts[2]});
		const uint256qwLj6Ck = await TokenDispatchZWWPp48.updateTeam.call(uintRV0U46, addressPf6mWq, addresscC5RLJL, {from: accounts[1]});
		const uint8UjJCfCJ = await TokenDispatchZWWPp48.claim.call(uinth4oDLOC, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLl31Kh6 = await TokenDispatch.new({from: accounts[2]});
		const uintqJrViyy = BigInt("162")
		const addressvwmcf2y = accounts[4]
		const addressPS4755N = accounts[3]
		const uintZX6Vnjf = BigInt("224")
		const uintHG5eqXa = BigInt("58")
		const uintIK3lQtF = BigInt("12")
		const 
eScxsci = await TokenDispatchLl31Kh6.teamOf.call(uintqJrViyy, {from: accounts[4]});
		const uint256nWpGucA = await TokenDispatchLl31Kh6.updateTeam.call(uintZX6Vnjf, addressPS4755N, addressvwmcf2y, {from: accounts[0]});
		const uint2561rTeOX = await TokenDispatchLl31Kh6.nextClaimHeightOf.call(uintHG5eqXa, {from: accounts[1]});
		const uint8g3ivOJX = await TokenDispatchLl31Kh6.claim.call(uintIK3lQtF, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchoj1QJnP = await TokenDispatch.new({from: accounts[0]});
		const uintn7oKu57 = BigInt("18")
		const uintZhdoqf = BigInt("22")
		const uintG5r8AA = BigInt("119")
		const addressREA0n0h = accounts[2]
		const addressj6qsIsu = accounts[2]
		const uintRNYLRz5 = BigInt("228")
		const uint256xRImxp = await TokenDispatchoj1QJnP.balanceOf.call(uintn7oKu57, {from: accounts[4]});
		const uint256X1lT6j4 = await TokenDispatchoj1QJnP.nextClaimHeightOf.call(uintZhdoqf, {from: accounts[0]});
		const uint256ld1piSb = await TokenDispatchoj1QJnP.nextClaimHeightOf.call(uintG5r8AA, {from: accounts[2]});
		const uint256uGlSYml = await TokenDispatchoj1QJnP.updateTeam.call(uintRNYLRz5, addressj6qsIsu, addressREA0n0h, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLl31Kh6 = await TokenDispatch.new({from: accounts[2]});
		const uintUCp3MCL = BigInt("32")
		const addressv8yE7eQ = accounts[1]
		const addressWHuBgud = accounts[0]
		const uintvKbvfIp = BigInt("92")
		const addresszOFsRFI = await TokenDispatchLl31Kh6.approve.call(addressWHuBgud, addressv8yE7eQ, uintUCp3MCL, {from: accounts[3]});
		const uint256AfXhb7 = await TokenDispatchLl31Kh6.nextClaimHeightOf.call(uintvKbvfIp, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLl31Kh6 = await TokenDispatch.new({from: accounts[2]});
		const uintmFpV4MN = BigInt("1263")
		const addresstPVzwRe = accounts[2]
		const addressIyyHvB5 = accounts[1]
		const uintyTnccAd = BigInt("12")
		const uintEYQhVNY = BigInt("94")
		const addressEg9VGOP = accounts[1]
		const addressHQm3Sku = accounts[3]
		const uintLfrpMFl = BigInt("228")
		const addressRxQJiL0 = await TokenDispatchLl31Kh6.approve.call(addressIyyHvB5, addresstPVzwRe, uintmFpV4MN, {from: accounts[2]});
		const uint8g3ivOJX = await TokenDispatchLl31Kh6.claim.call(uintyTnccAd, {from: accounts[4]});
		const uint8U7iu73 = await TokenDispatchLl31Kh6.claim.call(uintEYQhVNY, {from: accounts[2]});
		const uint256D14R9lG = await TokenDispatchLl31Kh6.updateTeam.call(uintLfrpMFl, addressHQm3Sku, addressEg9VGOP, {from: accounts[0]});
	});
})