const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchBlpUxo = await TokenDispatch.new({from: accounts[2]});
		const uintMT7EYi = BigInt("157")
		const uintUzhb5sH = BigInt("188")
		const addresswxLUBm2 = accounts[2]
		const addressaZQzt6Z = accounts[4]
		const uintwEofnzt = BigInt("157")
		const uinty78Mrnu = BigInt("245")
		const uint256gtuosEh = await TokenDispatchBlpUxo.balanceOf.call(uintMT7EYi, {from: accounts[2]});
		const uint256tuh2uWQ = await TokenDispatchBlpUxo.nextClaimHeightOf.call(uintUzhb5sH, {from: accounts[2]});
		const uint256buj4Ves = await TokenDispatchBlpUxo.updateTeam.call(uintwEofnzt, addressaZQzt6Z, addresswxLUBm2, {from: accounts[4]});
		const uint256eBccUKj = await TokenDispatchBlpUxo.nextClaimHeightOf.call(uinty78Mrnu, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchDnINPoF = await TokenDispatch.new({from: accounts[2]});
		const uintlPZMtC3 = BigInt("1535")
		const addresskYgIC8K = accounts[3]
		const addressFjBn8jI = accounts[2]
		const addressyM5Ce24 = accounts[3]
		const addressOAqG0L = "0x0000000000000000000000000000000000000001"
		const uintWOGgM6b = BigInt("53")
		const uintNbeTFao = BigInt("16")
		const uintFnIcV08 = BigInt("1871")
		const addressFb0VpbZ = accounts[4]
		const addressb2xL1t = accounts[4]
		const uintCs7SvvQ = BigInt("95")
		const addressSNaIFDb = await TokenDispatchDnINPoF.approve.call(addressFjBn8jI, addresskYgIC8K, uintlPZMtC3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vZPaGn3 = await TokenDispatchDnINPoF.updateTeam.call(uintWOGgM6b, addressOAqG0L, addressyM5Ce24, {from: "0x0000000000000000000000000000000000000001"});
		const uint8afDSv1 = await TokenDispatchDnINPoF.claim.call(uintNbeTFao, {from: accounts[2]});
		const address6aFzEo = await TokenDispatchDnINPoF.approve.call(addressb2xL1t, addressFb0VpbZ, uintFnIcV08, {from: accounts[4]});
		const uint256Un23jLf = await TokenDispatchDnINPoF.nextClaimHeightOf.call(uintCs7SvvQ, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchl4ajBM = await TokenDispatch.new({from: accounts[4]});
		const uintAD1FayD = BigInt("195")
		const uintzUNPy3 = BigInt("1751")
		const addressFtCURM = accounts[4]
		const addressESkGRz5 = accounts[2]
		const uintrgZJj0U = BigInt("83")
		const uint256VIlcde = await TokenDispatchl4ajBM.nextClaimHeightOf.call(uintAD1FayD, {from: accounts[3]});
		const addressipkL4Qo = await TokenDispatchl4ajBM.approve.call(addressESkGRz5, addressFtCURM, uintzUNPy3, {from: accounts[1]});
		const uint8yno6SV4 = await TokenDispatchl4ajBM.claim.call(uintrgZJj0U, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchBedJYXs = await TokenDispatch.new({from: accounts[0]});
		const addresswkRzlyP = accounts[4]
		const addresszCsoHHi = accounts[2]
		const uintyiLtpWG = BigInt("117")
		const uintRVPr6nN = BigInt("80")
		const addressakjI0v = accounts[3]
		const addressaXAlsU4 = accounts[5]
		const uintzodMYQ2 = BigInt("59")
		const uintyaouzSS = BigInt("57")
		const uint256S0B3SSo = await TokenDispatchBedJYXs.updateTeam.call(uintyiLtpWG, addresszCsoHHi, addresswkRzlyP, {from: accounts[0]});
		const uint8EN7TJhu = await TokenDispatchBedJYXs.claim.call(uintRVPr6nN, {from: accounts[3]});
		const uint256Nvq1PA6 = await TokenDispatchBedJYXs.updateTeam.call(uintzodMYQ2, addressaXAlsU4, addressakjI0v, {from: accounts[4]});
		const uint8gRMMctv = await TokenDispatchBedJYXs.claim.call(uintyaouzSS, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchRb96bQH = await TokenDispatch.new({from: accounts[3]});
		const uintQZvE7Mm = BigInt("28")
		const addressvRkwI1T = accounts[0]
		const addressx9ckTf1 = accounts[1]
		const uintgHQWXIu = BigInt("35")
		const uintrAu4BK3 = BigInt("79")
		const addressvzVvUa7 = accounts[1]
		const addressT3ulMn = accounts[2]
		const uintXFo3nrL = BigInt("199")
		const addressUDGsaOi = accounts[0]
		const addresswOVA91l = accounts[2]
		const uintwYAinu4 = BigInt("174")
		const 
bwqoc1 = await TokenDispatchRb96bQH.teamOf.call(uintQZvE7Mm, {from: accounts[0]});
		const uint256qjmSYGJ = await TokenDispatchRb96bQH.updateTeam.call(uintgHQWXIu, addressx9ckTf1, addressvRkwI1T, {from: accounts[4]});
		const uint256wzGbYsR = await TokenDispatchRb96bQH.balanceOf.call(uintrAu4BK3, {from: accounts[1]});
		const uint256sSCU4Hy = await TokenDispatchRb96bQH.updateTeam.call(uintXFo3nrL, addressT3ulMn, addressvzVvUa7, {from: accounts[4]});
		const uint256fXfcps0 = await TokenDispatchRb96bQH.updateTeam.call(uintwYAinu4, addresswOVA91l, addressUDGsaOi, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchbGNJ2lU = await TokenDispatch.new({from: accounts[0]});
		const uintNhbNpb = BigInt("76")
		const uintNTysc2e = BigInt("135")
		const uint8pF164q = await TokenDispatchbGNJ2lU.claim.call(uintNhbNpb, {from: "0x0000000000000000000000000000000000000001"});
		const 
nIV6vyX = await TokenDispatchbGNJ2lU.teamOf.call(uintNTysc2e, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchjurXLdH = await TokenDispatch.new({from: accounts[0]});
		const uintSs7ldos = BigInt("208")
		const uintfxu2FQ = BigInt("99")
		const uintGrN0Gqv = BigInt("1168")
		const addressnXNV5lc = accounts[4]
		const addressGo6MW6o = accounts[5]
		const uint256T8SGCE0 = await TokenDispatchjurXLdH.claimedOf.call(uintSs7ldos, {from: accounts[0]});
		const 
jm8Xu0 = await TokenDispatchjurXLdH.teamOf.call(uintfxu2FQ, {from: accounts[0]});
		const addressbh9sVKo = await TokenDispatchjurXLdH.approve.call(addressGo6MW6o, addressnXNV5lc, uintGrN0Gqv, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchbGNJ2lU = await TokenDispatch.new({from: accounts[0]});
		const uint5eYDr6 = BigInt("854")
		const addressl6UU0BB = accounts[4]
		const addressLRMIAos = accounts[2]
		const uintueeXxaH = BigInt("126")
		const uintna57O2S = BigInt("206")
		const uintILLIhl0 = BigInt("135")
		const addressp41Gyvz = await TokenDispatchbGNJ2lU.approve.call(addressLRMIAos, addressl6UU0BB, uint5eYDr6, {from: accounts[0]});
		const uint256sNQIKCG = await TokenDispatchbGNJ2lU.claimedOf.call(uintueeXxaH, {from: accounts[1]});
		const uint8pF164q = await TokenDispatchbGNJ2lU.claim.call(uintna57O2S, {from: "0x0000000000000000000000000000000000000001"});
		const 
nIV6vyX = await TokenDispatchbGNJ2lU.teamOf.call(uintILLIhl0, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchZGpK26y = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkku0ymu = BigInt("199")
		const addressAsOwM4 = accounts[0]
		const addressqjBre4B = accounts[4]
		const uintaVzS84n = BigInt("139")
		const uint9wRsQI = BigInt("38")
		const addressCExvKHe = accounts[3]
		const addressgM3od1i = accounts[0]
		const uintEloPjw = BigInt("95")
		const uintGkPc1D = BigInt("249")
		const 
QhceJ35 = await TokenDispatchZGpK26y.teamOf.call(uintkku0ymu, {from: accounts[2]});
		const uint256Xyuv05s = await TokenDispatchZGpK26y.updateTeam.call(uintaVzS84n, addressqjBre4B, addressAsOwM4, {from: accounts[4]});
		const uint256V5G00R = await TokenDispatchZGpK26y.claimedOf.call(uint9wRsQI, {from: accounts[0]});
		const uint256GW8Mg1k = await TokenDispatchZGpK26y.updateTeam.call(uintEloPjw, addressgM3od1i, addressCExvKHe, {from: accounts[4]});
		const uint8qCwIWox = await TokenDispatchZGpK26y.claim.call(uintGkPc1D, {from: accounts[1]});
	});
})