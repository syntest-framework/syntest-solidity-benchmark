const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchL0Dwkqc = await TokenDispatch.new({from: accounts[0]});
		const uintlvufUur = BigInt("147")
		const uintUipVtqA = BigInt("78")
		const uintWtoc5QK = BigInt("237")
		const uintIRTDB3D = BigInt("1224")
		const uintuhkCoJw = BigInt("175")
		const uintDrGRuru = BigInt("57")
		const uint256qZuK1Va = await TokenDispatchL0Dwkqc.balanceOf.call(uintlvufUur, {from: accounts[4]});
		const uint8FOEdVW7 = await TokenDispatchL0Dwkqc.claim.call(uintUipVtqA, {from: accounts[0]});
		const uint256lDCZWkc = await TokenDispatchL0Dwkqc.nextClaimHeightOf.call(uintWtoc5QK, {from: accounts[4]});
		const uintXwG5HDW = await TokenDispatchL0Dwkqc.signTransaction.call(uintIRTDB3D, {from: accounts[4]});
		const uint256ZRajWGr = await TokenDispatchL0Dwkqc.claimedOf.call(uintuhkCoJw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256x1CZpo = await TokenDispatchL0Dwkqc.claimedOf.call(uintDrGRuru, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchjsDhtmT = await TokenDispatch.new({from: accounts[2]});
		const uintJp14v1J = BigInt("78")
		const uintNBtgzii = BigInt("109")
		const uintXiKZKzM = BigInt("44")
		const uintB30hGQ = BigInt("125")
		const uintt5RiLKP = BigInt("1199")
		const addresswLglumA = accounts[1]
		const addressFCZ9Ch = accounts[4]
		const uint8lA8HSOn = await TokenDispatchjsDhtmT.claim.call(uintJp14v1J, {from: accounts[3]});
		const uint256qztWgf = await TokenDispatchjsDhtmT.claimedOf.call(uintNBtgzii, {from: accounts[4]});
		const uint256sQjiTm1 = await TokenDispatchjsDhtmT.nextClaimHeightOf.call(uintXiKZKzM, {from: accounts[1]});
		const uint256msz5Qhr = await TokenDispatchjsDhtmT.nextClaimHeightOf.call(uintB30hGQ, {from: accounts[2]});
		const addressBOfyGcs = await TokenDispatchjsDhtmT.approve.call(addressFCZ9Ch, addresswLglumA, uintt5RiLKP, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchIDb3ArA = await TokenDispatch.new({from: accounts[0]});
		const uintSV3emAZ = BigInt("835")
		const addresselcDr4i = accounts[3]
		const addresstWhSbvK = accounts[1]
		const addressczCvbAJ = accounts[3]
		const addressnldEJiQ = accounts[2]
		const uintZy2HC6T = BigInt("71")
		const uintkqxphc = BigInt("122")
		const addressz9b87iZ = accounts[4]
		const addressx4vaFy1 = accounts[2]
		const uintNNLteAq = BigInt("128")
		const addressLh5k63g = await TokenDispatchIDb3ArA.approve.call(addresstWhSbvK, addresselcDr4i, uintSV3emAZ, {from: accounts[0]});
		const uint256ErOkV2y = await TokenDispatchIDb3ArA.updateTeam.call(uintZy2HC6T, addressnldEJiQ, addressczCvbAJ, {from: accounts[4]});
		const uint256I2dMFqs = await TokenDispatchIDb3ArA.balanceOf.call(uintkqxphc, {from: accounts[3]});
		const uint256aK7cyfL = await TokenDispatchIDb3ArA.updateTeam.call(uintNNLteAq, addressx4vaFy1, addressz9b87iZ, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchJ01akA4 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintghUQx3w = BigInt("216")
		const uintGsOFzGZ = BigInt("143")
		const uint8XIDhmsO = await TokenDispatchJ01akA4.claim.call(uintghUQx3w, {from: accounts[3]});
		const uint256vuoyIWD = await TokenDispatchJ01akA4.balanceOf.call(uintGsOFzGZ, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchLNMWSFK = await TokenDispatch.new({from: accounts[3]});
		const uintLFzDqaZ = BigInt("109")
		const uintdvFJ0nW = BigInt("177")
		const addresszmFyr8 = accounts[4]
		const addressTgX9bix = accounts[3]
		const uintrSbuFZq = BigInt("140")
		const uintO14Qwst = BigInt("154")
		const uintujDpQw = BigInt("448")
		const uint256wFEukPA = await TokenDispatchLNMWSFK.nextClaimHeightOf.call(uintLFzDqaZ, {from: accounts[2]});
		const uint8VZCxMCq = await TokenDispatchLNMWSFK.claim.call(uintdvFJ0nW, {from: accounts[1]});
		const uint256xILQzkF = await TokenDispatchLNMWSFK.updateTeam.call(uintrSbuFZq, addressTgX9bix, addresszmFyr8, {from: accounts[2]});
		const uint256vfo2ghL = await TokenDispatchLNMWSFK.nextClaimHeightOf.call(uintO14Qwst, {from: accounts[5]});
		const uintZwO9pzr = await TokenDispatchLNMWSFK.signTransaction.call(uintujDpQw, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchYkTm5Um = await TokenDispatch.new({from: accounts[2]});
		const uintVbpC6QP = BigInt("130")
		const addressYYB2gOh = accounts[4]
		const addressq7G2emq = accounts[2]
		const uintMfhPIg9 = BigInt("172")
		const uintpsjHNzV = BigInt("224")
		const uint256rLb0uRL = await TokenDispatchYkTm5Um.claimedOf.call(uintVbpC6QP, {from: accounts[1]});
		const uint256gtA9MFL = await TokenDispatchYkTm5Um.updateTeam.call(uintMfhPIg9, addressq7G2emq, addressYYB2gOh, {from: accounts[3]});
		const uint256p0cI2qT = await TokenDispatchYkTm5Um.claimedOf.call(uintpsjHNzV, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchPXFJru9 = await TokenDispatch.new({from: accounts[2]});
		const uintGSFpXdM = BigInt("169")
		const uintlh6XEzK = BigInt("127")
		const uinth6Mvhrd = BigInt("92")
		const uintUQq0Hxu = BigInt("242")
		const addressugc8zj9 = accounts[0]
		const addressmSdB8VC = accounts[3]
		const uintgvyf3Xb = BigInt("14")
		const 
kNg2nRq = await TokenDispatchPXFJru9.teamOf.call(uintGSFpXdM, {from: "0x0000000000000000000000000000000000000001"});
		const 
ot0Qseu = await TokenDispatchPXFJru9.teamOf.call(uintlh6XEzK, {from: accounts[3]});
		const uint256eGS3m4H = await TokenDispatchPXFJru9.claimedOf.call(uinth6Mvhrd, {from: accounts[4]});
		const 
q89wKLM = await TokenDispatchPXFJru9.teamOf.call(uintUQq0Hxu, {from: accounts[4]});
		const uint256Bo7i07 = await TokenDispatchPXFJru9.updateTeam.call(uintgvyf3Xb, addressmSdB8VC, addressugc8zj9, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatch8KYx6x = await TokenDispatch.new({from: accounts[2]});
		const uinty2WAgub = BigInt("656")
		const addressDuSOyQ = accounts[0]
		const addressJG5yq1 = accounts[0]
		const uintJVUrEJz = BigInt("38")
		const uintyMPfDsu = BigInt("188")
		const uintUjb0mEB = BigInt("208")
		const addressUBKfVWi = await TokenDispatch8KYx6x.approve.call(addressJG5yq1, addressDuSOyQ, uinty2WAgub, {from: accounts[4]});
		const uint256rEbQqCB = await TokenDispatch8KYx6x.balanceOf.call(uintJVUrEJz, {from: accounts[4]});
		const uint8o8QsDK = await TokenDispatch8KYx6x.claim.call(uintyMPfDsu, {from: accounts[0]});
		const 
kqN40cy = await TokenDispatch8KYx6x.teamOf.call(uintUjb0mEB, {from: accounts[0]});
	});
})