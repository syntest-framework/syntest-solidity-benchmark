const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchld6Z6y = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxSxk8gQ = accounts[3]
		const addressW6RlJA = accounts[2]
		const uintlzQGVPK = BigInt("118")
		const uintOjXNv2 = BigInt("165")
		const uintYU5GdLE = BigInt("139")
		const uint256eEasxx5 = await TokenDispatchld6Z6y.updateTeam.call(uintlzQGVPK, addressW6RlJA, addressxSxk8gQ, {from: accounts[2]});
		const 
w45ZwCh = await TokenDispatchld6Z6y.teamOf.call(uintOjXNv2, {from: accounts[4]});
		const uint256SMVDLdb = await TokenDispatchld6Z6y.nextClaimHeightOf.call(uintYU5GdLE, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchZTS6xfi = await TokenDispatch.new({from: accounts[1]});
		const uintvYFpIOc = BigInt("198")
		const uintM1HCKXs = BigInt("160")
		const uintgtuw15v = BigInt("112")
		const uintGdwkITQ = BigInt("175")
		const uintNp45fPq = BigInt("109")
		const uintIoBzivI = BigInt("27")
		const 
zHN1EpK = await TokenDispatchZTS6xfi.teamOf.call(uintvYFpIOc, {from: accounts[3]});
		const uint2560CdILd = await TokenDispatchZTS6xfi.claimedOf.call(uintM1HCKXs, {from: accounts[0]});
		const uint256hyNc5qn = await TokenDispatchZTS6xfi.nextClaimHeightOf.call(uintgtuw15v, {from: accounts[2]});
		const 
apNA9I0 = await TokenDispatchZTS6xfi.teamOf.call(uintGdwkITQ, {from: accounts[0]});
		const uinton6Rylh = await TokenDispatchZTS6xfi.signTransaction.call(uintNp45fPq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OYp6Y2L = await TokenDispatchZTS6xfi.claimedOf.call(uintIoBzivI, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchVWbMmoR = await TokenDispatch.new({from: accounts[1]});
		const uintITMneXr = BigInt("137")
		const addressbzHKgy = accounts[3]
		const addresseDPV9X0 = accounts[1]
		const uintIJIpAxL = BigInt("244")
		const uintW2dBhC9 = BigInt("2046")
		const uintrQJKgW = BigInt("142")
		const uint256JnGotEr = await TokenDispatchVWbMmoR.nextClaimHeightOf.call(uintITMneXr, {from: accounts[2]});
		const uint256GjWKJJV = await TokenDispatchVWbMmoR.updateTeam.call(uintIJIpAxL, addresseDPV9X0, addressbzHKgy, {from: accounts[0]});
		const uintMdD7iAS = await TokenDispatchVWbMmoR.signTransaction.call(uintW2dBhC9, {from: accounts[4]});
		const 
fVhXAOV = await TokenDispatchVWbMmoR.teamOf.call(uintrQJKgW, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchURwTZGq = await TokenDispatch.new({from: accounts[2]});
		const addressTCtZty = accounts[2]
		const addressGLY2sXN = accounts[3]
		const uintCerIYBQ = BigInt("136")
		const uintXK38OF0 = BigInt("117")
		const addressLZOX9Qu = accounts[1]
		const addressLQn12mj = accounts[2]
		const uintHAjrDls = BigInt("239")
		const uintRhLyNMa = BigInt("127")
		const uint256nH6GmfN = await TokenDispatchURwTZGq.updateTeam.call(uintCerIYBQ, addressGLY2sXN, addressTCtZty, {from: accounts[2]});
		const uint256z3G4pMZ = await TokenDispatchURwTZGq.balanceOf.call(uintXK38OF0, {from: accounts[2]});
		const uint256XT8fXDl = await TokenDispatchURwTZGq.updateTeam.call(uintHAjrDls, addressLQn12mj, addressLZOX9Qu, {from: accounts[1]});
		const uintY3AvfbI = await TokenDispatchURwTZGq.signTransaction.call(uintRhLyNMa, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchAK4dooV = await TokenDispatch.new({from: accounts[2]});
		const uintZFuj9ji = BigInt("212")
		const uintn2SMR2a = BigInt("888")
		const addressOZD9zFL = accounts[0]
		const addressh5crW0 = accounts[1]
		const uintwQWpNCs = BigInt("195")
		const uint256fWPdbxZ = await TokenDispatchAK4dooV.claimedOf.call(uintZFuj9ji, {from: accounts[0]});
		const addressEn7RMC1 = await TokenDispatchAK4dooV.approve.call(addressh5crW0, addressOZD9zFL, uintn2SMR2a, {from: accounts[0]});
		const uint8oqy5BpN = await TokenDispatchAK4dooV.claim.call(uintwQWpNCs, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfnIyjNu = await TokenDispatch.new({from: accounts[0]});
		const uintbCtg2b0 = BigInt("179")
		const uintLbBzDF = BigInt("246")
		const uintpH8no7n = BigInt("150")
		const uint8Gw4EcKg = await TokenDispatchfnIyjNu.claim.call(uintbCtg2b0, {from: accounts[3]});
		const uint256UN7Q0UM = await TokenDispatchfnIyjNu.claimedOf.call(uintLbBzDF, {from: accounts[2]});
		const uint256ifBZDCz = await TokenDispatchfnIyjNu.claimedOf.call(uintpH8no7n, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfnIyjNu = await TokenDispatch.new({from: accounts[0]});
		const uintqOkMQHU = BigInt("1202")
		const addressn5oPVZ5 = accounts[1]
		const addressuKcWfV1 = "0x0000000000000000000000000000000000000001"
		const uint434pR5 = BigInt("145")
		const addressRe8kYSb = await TokenDispatchfnIyjNu.approve.call(addressuKcWfV1, addressn5oPVZ5, uintqOkMQHU, {from: accounts[4]});
		const uint8Gw4EcKg = await TokenDispatchfnIyjNu.claim.call(uint434pR5, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfnIyjNu = await TokenDispatch.new({from: accounts[0]});
		const uintmtqdwUg = BigInt("141")
		const uintSWHrsOd = BigInt("160")
		const uintdlhiSUO = BigInt("57")
		const uint256pqXqjP = await TokenDispatchfnIyjNu.balanceOf.call(uintmtqdwUg, {from: accounts[0]});
		const uint8Gw4EcKg = await TokenDispatchfnIyjNu.claim.call(uintSWHrsOd, {from: accounts[3]});
		const uint256ojnkgeQ = await TokenDispatchfnIyjNu.balanceOf.call(uintdlhiSUO, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfnIyjNu = await TokenDispatch.new({from: accounts[0]});
		const uintrX3W01o = BigInt("421")
		const addressiJK60CJ = accounts[4]
		const addressw5Px90 = "0x0000000000000000000000000000000000000001"
		const uintJpZNfm3 = BigInt("179")
		const uintCBZwUCZ = BigInt("769")
		const addressWXUlnyK = accounts[0]
		const addresszSrwA99 = accounts[2]
		const addressFmqHz8H = await TokenDispatchfnIyjNu.approve.call(addressw5Px90, addressiJK60CJ, uintrX3W01o, {from: accounts[0]});
		const uint8Gw4EcKg = await TokenDispatchfnIyjNu.claim.call(uintJpZNfm3, {from: accounts[3]});
		const addresssAAEWt5 = await TokenDispatchfnIyjNu.approve.call(addresszSrwA99, addressWXUlnyK, uintCBZwUCZ, {from: accounts[4]});
	});
})