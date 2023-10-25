const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintsGem5uy = BigInt("1868")
		const Cover_ZapIn_General_V1GdoByH = await Cover_ZapIn_General_V1.new(uintsGem5uy, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1GdoByH.stopInEmergency.call({from: accounts[4]});
		await Cover_ZapIn_General_V1GdoByH.stopInEmergency.call({from: accounts[4]});
		await Cover_ZapIn_General_V1GdoByH.withdraw.call({from: accounts[5]});
		await Cover_ZapIn_General_V1GdoByH.onlyOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1GdoByH.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinty21FTiD = BigInt("1057")
		const Cover_ZapIn_General_V1MrjNI2a = await Cover_ZapIn_General_V1.new(uinty21FTiD, {from: accounts[0]});
		const uintABV4Gyw = BigInt("191")
		const uintNG94A1 = BigInt("1198")
		await Cover_ZapIn_General_V1MrjNI2a.onlyOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1MrjNI2a.stopInEmergency.call({from: accounts[4]});
		const uint16tEFKE9R = await Cover_ZapIn_General_V1MrjNI2a.set_new_goodwill.call(uintABV4Gyw, {from: accounts[1]});
		const uint16rDRnwTn = await Cover_ZapIn_General_V1MrjNI2a.set_new_goodwill.call(uintNG94A1, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjb7GQY = BigInt("664")
		const Cover_ZapIn_General_V1889VY6 = await Cover_ZapIn_General_V1.new(uintjb7GQY, {from: accounts[3]});
		const addressTZ4HwDT = accounts[5]
		const addressDKNxRmM = accounts[1]
		const addressUwn5Gep = await Cover_ZapIn_General_V1889VY6.transferOwnership.call(addressTZ4HwDT, {from: accounts[0]});
		await Cover_ZapIn_General_V1889VY6.toggleContractActive.call({from: accounts[4]});
		const addresseNBJIT3 = await Cover_ZapIn_General_V1889VY6.transferOwnership.call(addressDKNxRmM, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintQdbMOF8 = BigInt("994")
		const Cover_ZapIn_General_V1A8kIHTy = await Cover_ZapIn_General_V1.new(uintQdbMOF8, {from: accounts[5]});
		const addressw4HgfRr = await Cover_ZapIn_General_V1A8kIHTy.owner.call({from: accounts[1]});
		const addressz1i7VTj = await Cover_ZapIn_General_V1A8kIHTy.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmokhuGE = await Cover_ZapIn_General_V1A8kIHTy.owner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1A8kIHTy.renounceOwnership.call({from: accounts[3]});
		await Cover_ZapIn_General_V1A8kIHTy.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintWfB9HzM = BigInt("581")
		const Cover_ZapIn_General_V1jo6hrdf = await Cover_ZapIn_General_V1.new(uintWfB9HzM, {from: accounts[5]});
		const bytelLmedNZ = "0x1d000e081c0411061b0816001c1d1d0c1a0d1f030518190d171700"
		const addressyyYg7U = "0x0000000000000000000000000000000000000001"
		const addressHb8pE4Y = accounts[0]
		const uinth0V0HN = BigInt("38")
		const addresstOCc9vl = accounts[1]
		const addresszgbweIS = accounts[1]
		const addressMd0EESW = accounts[4]
		const addressM1UmWPK = accounts[1]
		const addressWakc0bA = "0x0000000000000000000000000000000000000001"
		const addresszQLnB2x = accounts[1]
		const addressC9fZ76r = accounts[1]
		const uinttoZhLY4 = BigInt("1516")
		const addressg3rA0mi = accounts[2]
		const 
LgZIHky = await Cover_ZapIn_General_V1jo6hrdf.ZapIn.call(addressM1UmWPK, addressMd0EESW, addresszgbweIS, addresstOCc9vl, uinth0V0HN, addressHb8pE4Y, addressyyYg7U, bytelLmedNZ, {from: accounts[1]});
		await Cover_ZapIn_General_V1jo6hrdf.renounceOwnership.call({from: accounts[2]});
		const 
HMX5RyO = await Cover_ZapIn_General_V1jo6hrdf._getCoverDetails.call(addressWakc0bA, {from: accounts[2]});
		await Cover_ZapIn_General_V1jo6hrdf.withdraw.call({from: accounts[2]});
		const 
zWX1GaU = await Cover_ZapIn_General_V1jo6hrdf._enterPosition.call(addressg3rA0mi, uinttoZhLY4, addressC9fZ76r, addresszQLnB2x, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintOLWLNN7 = BigInt("1879")
		const Cover_ZapIn_General_V1BycuYUA = await Cover_ZapIn_General_V1.new(uintOLWLNN7, {from: accounts[0]});
		const addressm2sEBa1 = accounts[3]
		const addressCdwfID0 = accounts[2]
		const uintpErTcQI = BigInt("165")
		const addressbhtLJp = accounts[3]
		const addressgydzKtD = await Cover_ZapIn_General_V1BycuYUA.inCaseTokengetsStuck.call(addressm2sEBa1, {from: accounts[0]});
		await Cover_ZapIn_General_V1BycuYUA.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V1BycuYUA.renounceOwnership.call({from: accounts[2]});
		const boola1745jk = await Cover_ZapIn_General_V1BycuYUA.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGWJGkq = await Cover_ZapIn_General_V1BycuYUA.inCaseTokengetsStuck.call(addressCdwfID0, {from: accounts[0]});
		await Cover_ZapIn_General_V1BycuYUA._enterCover.call(addressbhtLJp, uintpErTcQI, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintoMQuWhV = BigInt("1814")
		const Cover_ZapIn_General_V1AA2MuGV = await Cover_ZapIn_General_V1.new(uintoMQuWhV, {from: accounts[0]});
		const addressKtkYTvj = "0x0000000000000000000000000000000000000001"
		const addressdia3hor = accounts[2]
		const uinthoeg574 = BigInt("1037")
		const addressV5A6akL = accounts[3]
		const uintRfs3Uw9 = BigInt("1391")
		const address2jWIE5 = accounts[5]
		const uintljOMwsE = BigInt("133")
		const addresskwSQ7od = accounts[0]
		await Cover_ZapIn_General_V1AA2MuGV.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1AA2MuGV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
wjLoa3Z = await Cover_ZapIn_General_V1AA2MuGV._enterPosition.call(addressV5A6akL, uinthoeg574, addressdia3hor, addressKtkYTvj, {from: accounts[0]});
		await Cover_ZapIn_General_V1AA2MuGV._enterCover.call(address2jWIE5, uintRfs3Uw9, {from: accounts[1]});
		await Cover_ZapIn_General_V1AA2MuGV._enterCover.call(addresskwSQ7od, uintljOMwsE, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthk9FGqw = BigInt("755")
		const Cover_ZapIn_General_V1ArTVZQw = await Cover_ZapIn_General_V1.new(uinthk9FGqw, {from: accounts[4]});
		const uintJq46H4W = BigInt("669")
		const addresse2nNJkO = accounts[1]
		const addressyc3I44s = accounts[0]
		const uint16fkHtnTX = await Cover_ZapIn_General_V1ArTVZQw.set_new_goodwill.call(uintJq46H4W, {from: accounts[4]});
		const 
OeybWqw = await Cover_ZapIn_General_V1ArTVZQw._getCoverDetails.call(addresse2nNJkO, {from: accounts[4]});
		const 
CPPwDs = await Cover_ZapIn_General_V1ArTVZQw._getCoverDetails.call(addressyc3I44s, {from: accounts[1]});
	});
})