const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressaJcwVk = accounts[2]
		const VotingVJjN0vC = await Voting.new(addressaJcwVk, {from: accounts[4]});
		const uintWIIHlRA = BigInt("523")
		const addressFxKTlwQ = accounts[4]
		const uintJKk0po7 = BigInt("1616")
		const uintWvbWCxx = BigInt("172")
		const addressBDOzFFg = accounts[1]
		const uintMYTYOIt = BigInt("2022")
		const addressNWlTN07 = accounts[1]
		const boolwJv19NA = await VotingVJjN0vC.transfer.call(addressFxKTlwQ, uintWIIHlRA, {from: accounts[3]});
		const uint256UiVxauD = await VotingVJjN0vC.burn.call(uintJKk0po7, {from: accounts[4]});
		const boolrpHLoVg = await VotingVJjN0vC.transfer.call(addressBDOzFFg, uintWvbWCxx, {from: accounts[5]});
		const boolslCBgoM = await VotingVJjN0vC.decreaseAllowance.call(addressNWlTN07, uintMYTYOIt, {from: accounts[5]});
		await VotingVJjN0vC.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressIbcUDoi = accounts[1]
		const VotingxpB6OJG = await Voting.new(addressIbcUDoi, {from: accounts[4]});
		const addressJPYzRw4 = accounts[0]
		const boolTyfpM7e = await VotingxpB6OJG.isValidOracleAddress.call(addressJPYzRw4, {from: accounts[2]});
		await VotingxpB6OJG.onlyMinter.call({from: accounts[1]});
		await VotingxpB6OJG.requiresLiquidityTokenSnapshotAccess.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressdOQrOms = "0x0000000000000000000000000000000000000001"
		const Votingbyxe49t = await Voting.new(addressdOQrOms, {from: accounts[4]});
		const addressJDCmMXp = accounts[2]
		const addressNdVlGEX = "0x0000000000000000000000000000000000000001"
		const addresszaHV8BT = accounts[3]
		const addressXWvPaJY = accounts[5]
		const booljxqomkH = await Votingbyxe49t.isOwner.call({from: accounts[1]});
		const addresszXhrXaL = await Votingbyxe49t.transferOwnership.call(addressJDCmMXp, {from: accounts[2]});
		const uint256o0Lyee = await Votingbyxe49t.allowance.call(addresszaHV8BT, addressNdVlGEX, {from: accounts[4]});
		const boolrI3HB04 = await Votingbyxe49t.isVotingSystem.call(addressXWvPaJY, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresskl22YI = accounts[1]
		const VotingbGUb9iq = await Voting.new(addresskl22YI, {from: accounts[2]});
		const uintDcL38rI = BigInt("1230")
		const boolWLRDZyC = false
		const uintfjxNyMU = BigInt("1211")
		const addressbuTCIXN = accounts[2]
		const uintT71jnDR = BigInt("1032")
		const uint256Ab2BWdy = await VotingbGUb9iq.veto.call(uintDcL38rI, {from: accounts[2]});
		const stringPAzB9rC = await VotingbGUb9iq.name.call({from: accounts[0]});
		const uint256R0NpPzM = await VotingbGUb9iq.vote.call(uintfjxNyMU, boolWLRDZyC, {from: "0x0000000000000000000000000000000000000001"});
		const stringvPOWVl = await VotingbGUb9iq.symbol.call({from: accounts[2]});
		const boolrNk5fw0 = await VotingbGUb9iq.didAddressVote.call(uintT71jnDR, addressbuTCIXN, {from: accounts[0]});
		const uint8fGUeW5r = await VotingbGUb9iq.decimals.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingFzENRK = await Voting.new({from: accounts[0]});
		const uinta5yNxHw = BigInt("479")
		await VotingFzENRK.onlyRegistry.call({from: accounts[0]});
		const addressd3j5edy = await VotingFzENRK.getRegistryAddress.call({from: accounts[4]});
		const uint256TRSvQWq = await VotingFzENRK.approve.call(uinta5yNxHw, {from: accounts[5]});
		await VotingFzENRK.requiresLiquidityTokenSnapshotAccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressnhWvcPn = accounts[0]
		const VotingVi5ppdb = await Voting.new(addressnhWvcPn, {from: accounts[0]});
		const addressJ0fWR6L = accounts[0]
		const uintjB86mdT = BigInt("11")
		const boolEQIxqaD = await VotingVi5ppdb.isValidVerifierAddress.call(addressJ0fWR6L, {from: accounts[3]});
		const uint256hkyKNIz = await VotingVi5ppdb.totalSupply.call({from: accounts[0]});
		const uint256DNP53fB = await VotingVi5ppdb.totalSupplyAt.call(uintjB86mdT, {from: accounts[4]});
		const stringTQVPpBl = await VotingVi5ppdb.symbol.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressB9rhkvg = accounts[5]
		const VotingAPTqX3T = await Voting.new(addressB9rhkvg, {from: accounts[0]});
		const boolXMWMvlq = false
		const uintkwTgD1O = BigInt("2021")
		const addressBxE8CUs = "0x0000000000000000000000000000000000000001"
		const uintddnOreP = BigInt("458")
		const addressF97j1ap = accounts[5]
		const uint256aeHY73F = await VotingAPTqX3T.vote.call(uintkwTgD1O, boolXMWMvlq, {from: accounts[5]});
		const boolzlnu7wN = await VotingAPTqX3T.didAddressVote.call(uintddnOreP, addressBxE8CUs, {from: accounts[3]});
		await VotingAPTqX3T.onlyExchange.call({from: accounts[4]});
		const uint256dxjfwIv = await VotingAPTqX3T.balanceOf.call(addressF97j1ap, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressypSR8WI = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressypSR8WI, {from: accounts[2]});
		const uintvjJvCL = BigInt("647")
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintvjJvCL, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotinguKW3ByM = await Voting.new({from: accounts[1]});
		const uintd5tmjEF = BigInt("1023")
		const addressUXZr9ui = "0x0000000000000000000000000000000000000001"
		const addressyJHUy03 = accounts[0]
		const boolTbmXLUz = false
		const uintMelG5mv = BigInt("1114")
		const addressh5f3G5 = accounts[2]
		const addresskeCK2a5 = accounts[3]
		const boolNLRAFbV = await VotinguKW3ByM.transferFrom.call(addressyJHUy03, addressUXZr9ui, uintd5tmjEF, {from: accounts[3]});
		const uint256MQCeXRR = await VotinguKW3ByM.vote.call(uintMelG5mv, boolTbmXLUz, {from: "0x0000000000000000000000000000000000000001"});
		const boolnbFwcn = await VotinguKW3ByM.isMinter.call(addressh5f3G5, {from: accounts[3]});
		const addressnPlgX38 = await VotinguKW3ByM.addMinter.call(addresskeCK2a5, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresshfbjYrc = accounts[0]
		const VotingE1jtM5g = await Voting.new(addresshfbjYrc, {from: accounts[2]});
		const uintmHHuctW = BigInt("817")
		const addressE6XGAqZ = accounts[0]
		const uintXzvoSfA = BigInt("647")
		const boolMkyvnC = await VotingE1jtM5g.approve.call(addressE6XGAqZ, uintmHHuctW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintXzvoSfA, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressbQm2pTj = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressbQm2pTj, {from: accounts[2]});
		const uintYJ5d1h1 = BigInt("583")
		const addressqhdJmjT = await VotingE1jtM5g.owner.call({from: accounts[3]});
		const uint256uHNails = await VotingE1jtM5g.snapshot.call({from: accounts[5]});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintYJ5d1h1, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressCVOrOf = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressCVOrOf, {from: accounts[2]});
		const addressWpyN9Py = accounts[4]
		const uintTzGZ6k0 = BigInt("604")
		const boolL9A9aU3 = await VotingE1jtM5g.isValidStamperAddress.call(addressWpyN9Py, {from: accounts[2]});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintTzGZ6k0, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresstG5AqDn = accounts[2]
		const VotingGHfB5pF = await Voting.new(addresstG5AqDn, {from: accounts[2]});
		const stringMgk9EZn = "TjzOJwBjY7TVOGhmV6"
		const stringNQg2TM5 = "QjeITXbVsjN7R1up39KcUN8DUwoEXISTEoMBSz9njbcybaxQ8F3SA3pb5I711MPtRCY1lHv90Dxm8humYjw2uy9Gy8FpaKsuVpf"
		const stringrTwRKKp = "LwhzUn3Ctl6TgeeWva5vIMioPlytGRVim2kC7g47m5QBgrGMXRAFLhDz8UlMMlbD2i1c"
		const byte0S499v = "0x19010e071415161319130d02020d1e1c0f0d131814180d130f0b"
		const addressMtzfYYx = accounts[2]
		const uintUGtV8d9 = BigInt("66")
		const addressKRsN5ro = accounts[2]
		const addresswwDvp40 = accounts[3]
		const 
tt7uSS2 = await VotingGHfB5pF.createProposal.call(addressMtzfYYx, byte0S499v, stringrTwRKKp, stringNQg2TM5, stringMgk9EZn, {from: accounts[0]});
		const booldo5bvaF = await VotingGHfB5pF.transfer.call(addressKRsN5ro, uintUGtV8d9, {from: accounts[1]});
		const boolcI23zv5 = await VotingGHfB5pF.isValidStamperAddress.call(addresswwDvp40, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingrDATbQE = await Voting.new({from: accounts[5]});
		const addressTl3KcGP = accounts[1]
		const addressvs8lTK3 = accounts[4]
		const uintcIOb3NI = BigInt("108")
		const addressF9rUQQJ = accounts[2]
		await VotingrDATbQE.onlyExchange.call({from: accounts[4]});
		await VotingrDATbQE.onlyRegistry.call({from: accounts[5]});
		const uint256GGXBQB = await VotingrDATbQE.allowance.call(addressvs8lTK3, addressTl3KcGP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UBBxrWM = await VotingrDATbQE.resolve.call(uintcIOb3NI, {from: accounts[3]});
		const booliIPkLWH = await VotingrDATbQE.isValidStamperAddress.call(addressF9rUQQJ, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressvQKkcIC = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressvQKkcIC, {from: accounts[2]});
		const uintBi93Gy1 = BigInt("1954")
		const uintgv7NSBS = BigInt("648")
		const uint256V2ndKJg = await VotingE1jtM5g.pause.call(uintBi93Gy1, {from: accounts[4]});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintgv7NSBS, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressMcRFUZM = accounts[3]
		const VotingbPbRuus = await Voting.new(addressMcRFUZM, {from: accounts[4]});
		const addressun20ND5 = accounts[1]
		const boolT0GbVTe = await VotingbPbRuus.isExchangeFactory.call(addressun20ND5, {from: accounts[0]});
		await VotingbPbRuus.requiresLiquidityTokenSnapshotAccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressgcMCTFO = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressgcMCTFO, {from: accounts[2]});
		const addressqXUKC7C = accounts[3]
		const stringxFqEMDj = "rFLLkBFz"
		const stringSJLGlXc = "i1OCZcKx5KIKJOUOrhTyWJgiSpwYNrxxA8W5w1ggsgQFhVhAAVqQVDguBfjrKQvLfC0UEuqTX0"
		const stringP1bpuXS = "hQ12M4zAtYpWKSbMktaeNZC7GBdqdK8o5gpkPdD42T35QEb1jnNSDCKfH33OysU7xhCxIyg37Yzand"
		const byteRENZsdw = "0x0e13021a0e0912071c020c1d1c1b1e081e2000"
		const addressetQM6DH = accounts[3]
		const uinthHFHNUj = BigInt("632")
		const addresskfRlEJ = await VotingE1jtM5g.transferOwnership.call(addressqXUKC7C, {from: accounts[2]});
		const 
pbjKjf3 = await VotingE1jtM5g.createProposal.call(addressetQM6DH, byteRENZsdw, stringP1bpuXS, stringSJLGlXc, stringxFqEMDj, {from: accounts[0]});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uinthHFHNUj, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressPkE21GL = accounts[0]
		const VotingE1jtM5g = await Voting.new(addressPkE21GL, {from: accounts[2]});
		const addressYCuGTCJ = accounts[3]
		const uintLuCojyv = BigInt("352")
		const uintXzvZmyP = BigInt("644")
		const boolRPGsk3d = await VotingE1jtM5g.didAddressVote.call(uintLuCojyv, addressYCuGTCJ, {from: accounts[2]});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintXzvZmyP, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingWO07Nv5 = await Voting.new({from: accounts[2]});
		const addresssHYLhZS = accounts[1]
		const addressfm1Djjh = accounts[2]
		const uintxAAcJJ7 = BigInt("1186")
		const addresscPJfcP = accounts[2]
		const uintpl3UrKj = BigInt("1875")
		const boolBA2WRDr = await VotingWO07Nv5.isMinter.call(addresssHYLhZS, {from: accounts[4]});
		const addressMAOxfTg = await VotingWO07Nv5.addMinter.call(addressfm1Djjh, {from: accounts[0]});
		const boolcPVR47L = await VotingWO07Nv5.decreaseAllowance.call(addresscPJfcP, uintxAAcJJ7, {from: accounts[1]});
		const stringsh3TaYl = await VotingWO07Nv5.name.call({from: accounts[5]});
		const uint256Kja8yyY = await VotingWO07Nv5.burn.call(uintpl3UrKj, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresssdLXKM1 = accounts[0]
		const VotingE1jtM5g = await Voting.new(addresssdLXKM1, {from: accounts[2]});
		const addressgQ519mt = accounts[0]
		const boolLQYhdc = true
		const uintNu08ebC = BigInt("866")
		const uintfTJoaQl = BigInt("177")
		const boolZ1N5Hkm = await VotingE1jtM5g.isVotingSystem.call(addressgQ519mt, {from: accounts[3]});
		const uint256n7D9gbh = await VotingE1jtM5g.vote.call(uintNu08ebC, boolLQYhdc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y0HJad4 = await VotingE1jtM5g.resolve.call(uintfTJoaQl, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Votingt2rUT81 = await Voting.new({from: accounts[3]});
		const addressp0aUkha = accounts[0]
		const uintPLTBePv = BigInt("506")
		const addressykJZofl = accounts[3]
		const boolkUDIemU = await Votingt2rUT81.isExchangeFactory.call(addressp0aUkha, {from: accounts[4]});
		const boolwl8Ni8k = await Votingt2rUT81.isOwner.call({from: accounts[0]});
		await Votingt2rUT81.onlyExchangeFactoryOrVotingSystem.call({from: accounts[0]});
		const boolQI4e3u = await Votingt2rUT81.approve.call(addressykJZofl, uintPLTBePv, {from: accounts[1]});
	});
})