const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchlBiZkM2 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYZ4mF9O = BigInt("82")
		const uintAVrWJ04 = BigInt("19")
		const uintNj0YYk = BigInt("47")
		const uinthAM16D1 = BigInt("158")
		const uint256PHO7hyo = await TokenDispatchlBiZkM2.balanceOf.call(uintYZ4mF9O, {from: accounts[1]});
		const uint8vwu15Du = await TokenDispatchlBiZkM2.claim.call(uintAVrWJ04, {from: accounts[4]});
		const 
eRJYws = await TokenDispatchlBiZkM2.teamOf.call(uintNj0YYk, {from: accounts[4]});
		const 
KE6rPf4 = await TokenDispatchlBiZkM2.teamOf.call(uinthAM16D1, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchfMlusgZ = await TokenDispatch.new({from: accounts[1]});
		const uintkkZZF1 = BigInt("97")
		const addresszV37j33 = accounts[1]
		const addressgcW455B = accounts[5]
		const uintyYMfnl6 = BigInt("168")
		const uintnZ0i8bW = BigInt("132")
		const uint256Dk0Edwz = await TokenDispatchfMlusgZ.nextClaimHeightOf.call(uintkkZZF1, {from: accounts[1]});
		const uint256OSDEpi = await TokenDispatchfMlusgZ.updateTeam.call(uintyYMfnl6, addressgcW455B, addresszV37j33, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qzsc8j5 = await TokenDispatchfMlusgZ.nextClaimHeightOf.call(uintnZ0i8bW, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatch7T7bh0 = await TokenDispatch.new({from: accounts[5]});
		const uintAMOQ5i = BigInt("235")
		const uintqr6UTLe = BigInt("52")
		const uintYrkjLI6 = BigInt("147")
		const uintzPGvihl = BigInt("116")
		const uintVNmbPPi = BigInt("164")
		const uint256K833VAo = await TokenDispatch7T7bh0.claimedOf.call(uintAMOQ5i, {from: accounts[0]});
		const uint256rfiARSQ = await TokenDispatch7T7bh0.nextClaimHeightOf.call(uintqr6UTLe, {from: accounts[0]});
		const uint256Uwd198u = await TokenDispatch7T7bh0.nextClaimHeightOf.call(uintYrkjLI6, {from: accounts[3]});
		const uint256C1IPP2v = await TokenDispatch7T7bh0.nextClaimHeightOf.call(uintzPGvihl, {from: accounts[3]});
		const uint256UKBUoiy = await TokenDispatch7T7bh0.balanceOf.call(uintVNmbPPi, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchYPL4bmb = await TokenDispatch.new({from: accounts[1]});
		const uintgsq8Ayi = BigInt("19")
		const uintUkRMx79 = BigInt("240")
		const uint256l3Aqy74 = await TokenDispatchYPL4bmb.balanceOf.call(uintgsq8Ayi, {from: accounts[1]});
		const uint256FvppbNG = await TokenDispatchYPL4bmb.claimedOf.call(uintUkRMx79, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchz0vts21 = await TokenDispatch.new({from: accounts[1]});
		const uintWVT4lT9 = BigInt("197")
		const uintstUs9wz = BigInt("202")
		const 
jL2jVGp = await TokenDispatchz0vts21.teamOf.call(uintWVT4lT9, {from: accounts[5]});
		const uint256fGvh7qi = await TokenDispatchz0vts21.nextClaimHeightOf.call(uintstUs9wz, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchz0vts21 = await TokenDispatch.new({from: accounts[1]});
		const uintJqkfgFe = BigInt("220")
		const uintVwYLDse = BigInt("219")
		const addressgqcXIVN = accounts[1]
		const addressXVjjiGY = accounts[1]
		const uintjTUmz00 = BigInt("193")
		const uint8OPcl7H = await TokenDispatchz0vts21.claim.call(uintJqkfgFe, {from: accounts[1]});
		const uint256fGvh7qi = await TokenDispatchz0vts21.nextClaimHeightOf.call(uintVwYLDse, {from: accounts[4]});
		const uint256kQv0Gu9 = await TokenDispatchz0vts21.updateTeam.call(uintjTUmz00, addressXVjjiGY, addressgqcXIVN, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchqEEn3gF = await TokenDispatch.new({from: accounts[1]});
		const addressAft9ecs = accounts[3]
		const addresszubWqP = accounts[3]
		const uintRLP8O5T = BigInt("4")
		const uintwTg92KO = BigInt("173")
		const uintqk4JW4 = BigInt("8")
		const uintipdmOsh = BigInt("157")
		const uint256J7Qb6z1 = await TokenDispatchqEEn3gF.updateTeam.call(uintRLP8O5T, addresszubWqP, addressAft9ecs, {from: accounts[2]});
		const 
CMwEVCW = await TokenDispatchqEEn3gF.teamOf.call(uintwTg92KO, {from: accounts[3]});
		const uint256ucwdank = await TokenDispatchqEEn3gF.balanceOf.call(uintqk4JW4, {from: accounts[1]});
		const 
EdWopbo = await TokenDispatchqEEn3gF.teamOf.call(uintipdmOsh, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchz0vts21 = await TokenDispatch.new({from: accounts[1]});
		const uintLEe0UDL = BigInt("839")
		const addressoSSOsAM = accounts[2]
		const addressluwma5b = accounts[4]
		const uintcVHwMMS = BigInt("50")
		const addressTQpkvm = await TokenDispatchz0vts21.approve.call(addressluwma5b, addressoSSOsAM, uintLEe0UDL, {from: accounts[2]});
		const uint8HHf2FjD = await TokenDispatchz0vts21.claim.call(uintcVHwMMS, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchz0vts21 = await TokenDispatch.new({from: accounts[1]});
		const uintsBg8i9K = BigInt("1267")
		const addressSveHSRk = accounts[4]
		const addressN9dQjBn = accounts[3]
		const uintiFThu33 = BigInt("220")
		const uintBxtUTn0 = BigInt("219")
		const addressTBQfQX = accounts[1]
		const addressuPjJ9dl = accounts[2]
		const uintQ7OK3i = BigInt("193")
		const addresshzIAsM4 = await TokenDispatchz0vts21.approve.call(addressN9dQjBn, addressSveHSRk, uintsBg8i9K, {from: accounts[1]});
		const uint8OPcl7H = await TokenDispatchz0vts21.claim.call(uintiFThu33, {from: accounts[1]});
		const uint256fGvh7qi = await TokenDispatchz0vts21.nextClaimHeightOf.call(uintBxtUTn0, {from: accounts[4]});
		const uint256kQv0Gu9 = await TokenDispatchz0vts21.updateTeam.call(uintQ7OK3i, addressuPjJ9dl, addressTBQfQX, {from: accounts[3]});
	});
})