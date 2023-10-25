const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintEM3GmKC = BigInt("1626")
		const Cover_ZapIn_General_V1B1wKKzG = await Cover_ZapIn_General_V1.new(uintEM3GmKC, {from: accounts[5]});
		const byteUyXOpbX = "0x171f0b1d140812070d1b0c1b0511191e16021608160e171a0e1b0d"
		const addressmcloP1H = accounts[2]
		const addressLch1v9g = accounts[4]
		const uintz32ZJht = BigInt("1393")
		const addressmWrkBn8 = accounts[2]
		const addressps02cGl = accounts[1]
		const addressyBnwQUt = accounts[4]
		const addressY8oQzs = accounts[3]
		const 
tUE4CNJ = await Cover_ZapIn_General_V1B1wKKzG.ZapIn.call(addressY8oQzs, addressyBnwQUt, addressps02cGl, addressmWrkBn8, uintz32ZJht, addressLch1v9g, addressmcloP1H, byteUyXOpbX, {from: accounts[0]});
		const boolSqJBOIt = await Cover_ZapIn_General_V1B1wKKzG.isOwner.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintz4CGPbj = BigInt("870")
		const Cover_ZapIn_General_V1S3Mphdh = await Cover_ZapIn_General_V1.new(uintz4CGPbj, {from: accounts[0]});
		const addressLqMd6US = accounts[1]
		const addressIkHlk4n = accounts[3]
		const uintYJLYxdn = BigInt("714")
		const addressInol5rd = accounts[1]
		const uintqmuN4T = BigInt("1354")
		const addressA0SbMf = await Cover_ZapIn_General_V1S3Mphdh.transferOwnership.call(addressLqMd6US, {from: accounts[2]});
		const 
fSPYE5M = await Cover_ZapIn_General_V1S3Mphdh._getCoverDetails.call(addressIkHlk4n, {from: accounts[1]});
		await Cover_ZapIn_General_V1S3Mphdh._enterCover.call(addressInol5rd, uintYJLYxdn, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1S3Mphdh.toggleContractActive.call({from: accounts[1]});
		const uint16gi8Baiy = await Cover_ZapIn_General_V1S3Mphdh.set_new_goodwill.call(uintqmuN4T, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintHE2ERrS = BigInt("1698")
		const Cover_ZapIn_General_V1xaWuAMC = await Cover_ZapIn_General_V1.new(uintHE2ERrS, {from: accounts[3]});
		const addressrTiZqVf = accounts[1]
		const addressSsw1NAM = accounts[1]
		const addressALVng2h = accounts[3]
		const uintSeiXzNC = BigInt("554")
		const addressZP2nXJ = accounts[4]
		await Cover_ZapIn_General_V1xaWuAMC.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJI47mqF = await Cover_ZapIn_General_V1xaWuAMC.transferOwnership.call(addressrTiZqVf, {from: accounts[3]});
		const 
BEYz1PP = await Cover_ZapIn_General_V1xaWuAMC._enterPosition.call(addressZP2nXJ, uintSeiXzNC, addressALVng2h, addressSsw1NAM, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQUNZHa = BigInt("372")
		const Cover_ZapIn_General_V1QXjE7Og = await Cover_ZapIn_General_V1.new(uintQUNZHa, {from: accounts[2]});
		const uintNaIUF0h = BigInt("580")
		const uintynAD8zA = BigInt("845")
		const byteZjQEwGc = "0x0d120011071c15000c0402"
		const addressPz51Bq = "0x0000000000000000000000000000000000000001"
		const addresshxskTlD = accounts[1]
		const uintkOfPx6p = BigInt("1565")
		const addressNyOnn14 = accounts[4]
		const addressRPelpfe = accounts[0]
		const addressfG6ys1E = accounts[4]
		const addressBwanl1B = accounts[3]
		const uintVjZfK3E = BigInt("1270")
		const addressCpSgr1X = accounts[4]
		const addressfwvndNr = await Cover_ZapIn_General_V1QXjE7Og.owner.call({from: accounts[0]});
		const uint16jkG4z10 = await Cover_ZapIn_General_V1QXjE7Og.set_new_goodwill.call(uintNaIUF0h, {from: accounts[3]});
		const uint16raQhZgl = await Cover_ZapIn_General_V1QXjE7Og.set_new_goodwill.call(uintynAD8zA, {from: "0x0000000000000000000000000000000000000001"});
		const 
WHSCbgF = await Cover_ZapIn_General_V1QXjE7Og.ZapIn.call(addressBwanl1B, addressfG6ys1E, addressRPelpfe, addressNyOnn14, uintkOfPx6p, addresshxskTlD, addressPz51Bq, byteZjQEwGc, {from: accounts[3]});
		await Cover_ZapIn_General_V1QXjE7Og._enterCover.call(addressCpSgr1X, uintVjZfK3E, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintmHQByB = BigInt("1239")
		const Cover_ZapIn_General_V1XXfo2gP = await Cover_ZapIn_General_V1.new(uintmHQByB, {from: accounts[4]});
		const addresswoqi81u = accounts[1]
		const addressKECIfrP = accounts[1]
		const addressZuPIsWZ = await Cover_ZapIn_General_V1XXfo2gP.transferOwnership.call(addresswoqi81u, {from: accounts[4]});
		const addressTRO1mT = await Cover_ZapIn_General_V1XXfo2gP.toPayable.call(addressKECIfrP, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGkR3oOp = BigInt("346")
		const Cover_ZapIn_General_V1fAFzK0 = await Cover_ZapIn_General_V1.new(uintGkR3oOp, {from: "0x0000000000000000000000000000000000000001"});
		const addresszLA1VHG = accounts[0]
		const addresszGume2p = accounts[4]
		const uintz3QZGC4 = BigInt("1775")
		const addressCGVXHrz = accounts[1]
		const addressQneDKHs = accounts[4]
		await Cover_ZapIn_General_V1fAFzK0.nonReentrant.call({from: accounts[0]});
		const addresshairrnc = await Cover_ZapIn_General_V1fAFzK0.owner.call({from: accounts[4]});
		const 
YDMmURH = await Cover_ZapIn_General_V1fAFzK0._enterPosition.call(addressCGVXHrz, uintz3QZGC4, addresszGume2p, addresszLA1VHG, {from: accounts[4]});
		await Cover_ZapIn_General_V1fAFzK0.toggleContractActive.call({from: accounts[1]});
		const addressmoY8uXY = await Cover_ZapIn_General_V1fAFzK0.inCaseTokengetsStuck.call(addressQneDKHs, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintoDljqdL = BigInt("1626")
		const Cover_ZapIn_General_V1B1wKKzG = await Cover_ZapIn_General_V1.new(uintoDljqdL, {from: accounts[5]});
		const byteLKHu40g = "0x171f0b1d140812070d1b0c1b0511191e16021608160e171a0e1b0d"
		const addressVymOoY = accounts[2]
		const addressPnaQvqq = accounts[4]
		const uintn2dG4Ud = BigInt("1393")
		const addressnyP2HJ = accounts[3]
		const addressq8n3Mpk = accounts[1]
		const addressG12nebr = accounts[4]
		const addressBipc8KN = accounts[3]
		const addressPOjZGvS = accounts[4]
		const addressfpd2FcL = accounts[1]
		const uintnqYe8PK = BigInt("778")
		const addressP5mpjze = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1B1wKKzG.renounceOwnership.call({from: accounts[5]});
		const 
tUE4CNJ = await Cover_ZapIn_General_V1B1wKKzG.ZapIn.call(addressBipc8KN, addressG12nebr, addressq8n3Mpk, addressnyP2HJ, uintn2dG4Ud, addressPnaQvqq, addressVymOoY, byteLKHu40g, {from: accounts[0]});
		await Cover_ZapIn_General_V1B1wKKzG.nonReentrant.call({from: accounts[4]});
		const boolSqJBOIt = await Cover_ZapIn_General_V1B1wKKzG.isOwner.call({from: accounts[4]});
		const 
YYdmhtv = await Cover_ZapIn_General_V1B1wKKzG._enterPosition.call(addressP5mpjze, uintnqYe8PK, addressfpd2FcL, addressPOjZGvS, {from: accounts[5]});
	});
})