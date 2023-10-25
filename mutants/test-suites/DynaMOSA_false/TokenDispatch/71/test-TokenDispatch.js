const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchGeh55A = await TokenDispatch.new({from: accounts[3]});
		const uintsfXah5M = BigInt("1510")
		const addressYShO2i = accounts[2]
		const addressI65CgSr = accounts[2]
		const addressIgoWF6O = accounts[5]
		const addressoTzSWwK = accounts[3]
		const uintnhz9G4 = BigInt("207")
		const uintPt738zH = BigInt("208")
		const uinthQyJOaH = BigInt("214")
		const uintEFfFAzX = BigInt("50")
		const addressGXpTPC = await TokenDispatchGeh55A.approve.call(addressI65CgSr, addressYShO2i, uintsfXah5M, {from: accounts[1]});
		const uint256sGTDe7 = await TokenDispatchGeh55A.updateTeam.call(uintnhz9G4, addressoTzSWwK, addressIgoWF6O, {from: accounts[3]});
		const uint256YYGxubh = await TokenDispatchGeh55A.balanceOf.call(uintPt738zH, {from: accounts[4]});
		const uint8R4ijWV = await TokenDispatchGeh55A.claim.call(uinthQyJOaH, {from: accounts[4]});
		const 
A3VyN2A = await TokenDispatchGeh55A.teamOf.call(uintEFfFAzX, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchskGctl = await TokenDispatch.new({from: accounts[4]});
		const uintoUB44xW = BigInt("34")
		const uintWoXs95Z = BigInt("1366")
		const addressiFcHYY4 = accounts[0]
		const addressuchCKAh = accounts[4]
		const uintvUnAAr = BigInt("199")
		const uintd2hmBLS = BigInt("1091")
		const addresskk17UXb = accounts[4]
		const addressDmtGq3 = accounts[3]
		const 
c3kyXuU = await TokenDispatchskGctl.teamOf.call(uintoUB44xW, {from: accounts[1]});
		const addressmgR0tUs = await TokenDispatchskGctl.approve.call(addressuchCKAh, addressiFcHYY4, uintWoXs95Z, {from: accounts[1]});
		const uint8uYXIk0d = await TokenDispatchskGctl.claim.call(uintvUnAAr, {from: accounts[3]});
		const addressTqVYq7 = await TokenDispatchskGctl.approve.call(addressDmtGq3, addresskk17UXb, uintd2hmBLS, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchcvfSWP = await TokenDispatch.new({from: accounts[0]});
		const uintKgtYoeW = BigInt("1482")
		const addressif10LM6 = "0x0000000000000000000000000000000000000001"
		const addresscbsWqmU = accounts[1]
		const addressMdxOGBX = accounts[0]
		const addressIJ0GrI8 = "0x0000000000000000000000000000000000000001"
		const uintOgqlj4m = BigInt("156")
		const uintsX8Y9A = BigInt("36")
		const addressrC2vCM = await TokenDispatchcvfSWP.approve.call(addresscbsWqmU, addressif10LM6, uintKgtYoeW, {from: accounts[0]});
		const uint256a0oA7uN = await TokenDispatchcvfSWP.updateTeam.call(uintOgqlj4m, addressIJ0GrI8, addressMdxOGBX, {from: accounts[0]});
		const uint25657mrgv = await TokenDispatchcvfSWP.nextClaimHeightOf.call(uintsX8Y9A, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchBByVC5 = await TokenDispatch.new({from: accounts[4]});
		const uintuxXiLeV = BigInt("70")
		const uintr3zO738 = BigInt("196")
		const uintBGbezpA = BigInt("222")
		const addressN4VVMBd = accounts[0]
		const addressLKTgSl3 = accounts[0]
		const uintCGwQcn = BigInt("212")
		const addressXOZnGvB = accounts[3]
		const addressaR27tOJ = accounts[3]
		const uintVwsRiPp = BigInt("7")
		const uintG3q76kb = BigInt("245")
		const uint256F34Oe7 = await TokenDispatchBByVC5.claimedOf.call(uintuxXiLeV, {from: accounts[2]});
		const uint256Pg6MTwz = await TokenDispatchBByVC5.balanceOf.call(uintr3zO738, {from: accounts[3]});
		const uint8HDd0kEl = await TokenDispatchBByVC5.claim.call(uintBGbezpA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XqgldDR = await TokenDispatchBByVC5.updateTeam.call(uintCGwQcn, addressLKTgSl3, addressN4VVMBd, {from: accounts[0]});
		const uint256RtJK5nK = await TokenDispatchBByVC5.updateTeam.call(uintVwsRiPp, addressaR27tOJ, addressXOZnGvB, {from: accounts[0]});
		const uint256vIjj4s3 = await TokenDispatchBByVC5.balanceOf.call(uintG3q76kb, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchpC6zNr0 = await TokenDispatch.new({from: accounts[0]});
		const uintnPkiZm = BigInt("255")
		const uinta0zw9SA = BigInt("77")
		const uintb2CO7Hx = BigInt("152")
		const uintVib8WHS = BigInt("43")
		const uintEagpCHn = BigInt("234")
		const uint256ptzSD7C = await TokenDispatchpC6zNr0.balanceOf.call(uintnPkiZm, {from: accounts[1]});
		const 
mSxP3X7 = await TokenDispatchpC6zNr0.teamOf.call(uinta0zw9SA, {from: accounts[5]});
		const uint256tM7CRTc = await TokenDispatchpC6zNr0.balanceOf.call(uintb2CO7Hx, {from: accounts[4]});
		const uint256N1hXKW5 = await TokenDispatchpC6zNr0.claimedOf.call(uintVib8WHS, {from: accounts[0]});
		const uint256NqFGFtG = await TokenDispatchpC6zNr0.balanceOf.call(uintEagpCHn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchcvfSWP = await TokenDispatch.new({from: accounts[0]});
		const uintbqErgSa = BigInt("1482")
		const addressGltUSTA = "0x0000000000000000000000000000000000000001"
		const addresslpgZMen = accounts[1]
		const uintp4AvXs = BigInt("36")
		const uintdESVlgO = BigInt("177")
		const uintEd7EkD6 = BigInt("225")
		const addressrC2vCM = await TokenDispatchcvfSWP.approve.call(addresslpgZMen, addressGltUSTA, uintbqErgSa, {from: accounts[0]});
		const uint25657mrgv = await TokenDispatchcvfSWP.nextClaimHeightOf.call(uintp4AvXs, {from: accounts[4]});
		const uint256RvvgfSZ = await TokenDispatchcvfSWP.balanceOf.call(uintdESVlgO, {from: accounts[0]});
		const 
wj3wZn4 = await TokenDispatchcvfSWP.teamOf.call(uintEd7EkD6, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLoCZxMF = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCFYmN3 = BigInt("475")
		const addressnXQ11Ju = accounts[0]
		const addressrlvU2s = accounts[4]
		const uintEJ0Pnd5 = BigInt("179")
		const uintc0n0oR = BigInt("59")
		const addressUr6LXlw = accounts[4]
		const addressLZMfl9D = accounts[2]
		const uinto34T1BF = BigInt("174")
		const uintYulrFEw = BigInt("72")
		const uintAmCDJp = BigInt("924")
		const addressCbcZDQ0 = "0x0000000000000000000000000000000000000001"
		const addressjgBwou = accounts[3]
		const addressrrm0tzy = await TokenDispatchLoCZxMF.approve.call(addressrlvU2s, addressnXQ11Ju, uintCFYmN3, {from: accounts[3]});
		const uint8N40NQtx = await TokenDispatchLoCZxMF.claim.call(uintEJ0Pnd5, {from: accounts[4]});
		const uint256Kt3xdi = await TokenDispatchLoCZxMF.claimedOf.call(uintc0n0oR, {from: accounts[3]});
		const uint256OdGDfNY = await TokenDispatchLoCZxMF.updateTeam.call(uinto34T1BF, addressLZMfl9D, addressUr6LXlw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KBsHuKh = await TokenDispatchLoCZxMF.balanceOf.call(uintYulrFEw, {from: accounts[0]});
		const addressU5PTL9C = await TokenDispatchLoCZxMF.approve.call(addressjgBwou, addressCbcZDQ0, uintAmCDJp, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchskGctl = await TokenDispatch.new({from: accounts[4]});
		const uintGPE80Bg = BigInt("225")
		const uintWVHqicg = BigInt("34")
		const uinteDAcO0X = BigInt("1366")
		const addressTuZCJv6 = accounts[0]
		const addressyNBII76 = accounts[4]
		const uintXwtMeaE = BigInt("198")
		const uintQoznSlV = BigInt("175")
		const uintNLf7n8Y = BigInt("1091")
		const addressrLpKldG = accounts[4]
		const addressflqIpDO = accounts[3]
		const uint8EzlbvxC = await TokenDispatchskGctl.claim.call(uintGPE80Bg, {from: accounts[0]});
		const 
c3kyXuU = await TokenDispatchskGctl.teamOf.call(uintWVHqicg, {from: accounts[1]});
		const addressmgR0tUs = await TokenDispatchskGctl.approve.call(addressyNBII76, addressTuZCJv6, uinteDAcO0X, {from: accounts[1]});
		const uint8uYXIk0d = await TokenDispatchskGctl.claim.call(uintXwtMeaE, {from: accounts[3]});
		const 
q9IIV9A = await TokenDispatchskGctl.teamOf.call(uintQoznSlV, {from: accounts[2]});
		const addressTqVYq7 = await TokenDispatchskGctl.approve.call(addressflqIpDO, addressrLpKldG, uintNLf7n8Y, {from: accounts[5]});
	});
})