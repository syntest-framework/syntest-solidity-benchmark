const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyQYAn9Um = await HungryHoody.new({from: accounts[3]});
		const uintCNPNsEz = BigInt("774")
		const addressgOWcgV8 = accounts[0]
		const uintzILobig = BigInt("1432")
		const uintqOZWTpR = BigInt("977")
		const addresswL6KAKu = accounts[4]
		const addresszRtuufo = accounts[5]
		const booljjSp9UH = await HungryHoodyQYAn9Um.transfer.call(addressgOWcgV8, uintCNPNsEz, {from: accounts[3]});
		const uintbMtU65G = await HungryHoodyQYAn9Um.safeMul.call(uintqOZWTpR, uintzILobig, {from: accounts[1]});
		const uintextxKDl = await HungryHoodyQYAn9Um.totalSupply.call({from: accounts[2]});
		const uintiicrAoV = await HungryHoodyQYAn9Um.balanceOf.call(addresswL6KAKu, {from: accounts[0]});
		const uintG5zSMSi = await HungryHoodyQYAn9Um.balanceOf.call(addresszRtuufo, {from: accounts[0]});
		const uintHfDNT6j = await HungryHoodyQYAn9Um.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljjSp9UH, true)
		assert.equal(uintG5zSMSi, BigInt("0"))
		assert.equal(uintHfDNT6j, BigInt("25000000000000000000"))
		assert.equal(uintbMtU65G, BigInt("1399064"))
		assert.equal(uintextxKDl, BigInt("25000000000000000000"))
		assert.equal(uintiicrAoV, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyW0zJ8x = await HungryHoody.new({from: accounts[4]});
		const uintWIIE9eQ = BigInt("1732")
		const uintXIfBx9k = BigInt("1129")
		const uints2LY7Oi = BigInt("380")
		const uintjK3Il53 = BigInt("984")
		const uinti1hZVc = BigInt("529")
		const uintUZ0yqXE = BigInt("1316")
		const addressujNzErY = accounts[4]
		const addressMP53lpJ = accounts[0]
		const uintLbvAHO = await HungryHoodyW0zJ8x.safeAdd.call(uintXIfBx9k, uintWIIE9eQ, {from: accounts[1]});
		const uintQVuWkTB = await HungryHoodyW0zJ8x.safeDiv.call(uintjK3Il53, uints2LY7Oi, {from: accounts[3]});
		const uintkaVIGkt = await HungryHoodyW0zJ8x.safeMul.call(uintUZ0yqXE, uinti1hZVc, {from: "0x0000000000000000000000000000000000000001"});
		const uintdUE2Cqd = await HungryHoodyW0zJ8x.allowance.call(addressMP53lpJ, addressujNzErY, {from: accounts[1]});

		assert.equal(uintLbvAHO, BigInt("2861"))
		assert.equal(uintQVuWkTB, BigInt("2"))
		assert.equal(uintdUE2Cqd, BigInt("0"))
		assert.equal(uintkaVIGkt, BigInt("696164"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodypup8iwx = await HungryHoody.new({from: accounts[0]});
		const uinty8SYA4V = BigInt("112")
		const uintzqjSje = BigInt("1447")
		const uintOHiapAa = BigInt("1369")
		const addressUNsLRcu = accounts[0]
		const uintQAZghZE = BigInt("1517")
		const addressaEgp8dx = accounts[2]
		const uintOt3ypZP = BigInt("72")
		const addressuHRJpxY = accounts[0]
		const uintvYub54v = await HungryHoodypup8iwx.safeMul.call(uintzqjSje, uinty8SYA4V, {from: accounts[3]});
		const boolwu2iVd = await HungryHoodypup8iwx.approve.call(addressUNsLRcu, uintOHiapAa, {from: accounts[3]});
		const uintOLTiOUs = await HungryHoodypup8iwx.totalSupply.call({from: accounts[3]});
		const booloTyWuvw = await HungryHoodypup8iwx.approve.call(addressaEgp8dx, uintQAZghZE, {from: "0x0000000000000000000000000000000000000001"});
		const boolnP1trip = await HungryHoodypup8iwx.transfer.call(addressuHRJpxY, uintOt3ypZP, {from: accounts[3]});

		assert.equal(booloTyWuvw, true)
		assert.equal(boolwu2iVd, true)
		assert.equal(uintOLTiOUs, BigInt("25000000000000000000"))
		assert.equal(uintvYub54v, BigInt("162064"))
		await expect(HungryHoodypup8iwx.transfer.call(addressuHRJpxY, uintOt3ypZP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyOkq4pu = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfWU8ywZ = BigInt("1728")
		const addressej2DW18 = accounts[2]
		const uintCTfp984 = BigInt("1632")
		const addressZOV9zSB = accounts[0]
		const addressaVsQKco = accounts[1]
		const boolBnuxWc7 = await HungryHoodyOkq4pu.approve.call(addressej2DW18, uintfWU8ywZ, {from: accounts[3]});
		const boolrFsdwso = await HungryHoodyOkq4pu.approve.call(addressZOV9zSB, uintCTfp984, {from: accounts[4]});
		const uintHHr4HGT = await HungryHoodyOkq4pu.balanceOf.call(addressaVsQKco, {from: accounts[4]});
		const uintflbyCQA = await HungryHoodyOkq4pu.totalSupply.call({from: accounts[4]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyUHLThpe = await HungryHoody.new({from: accounts[2]});
		const uintOKhZqe = BigInt("1926")
		const addresskjGBi7e = accounts[1]
		const addressJM3soCv = accounts[4]
		const uintpJcKmjm = BigInt("1491")
		const uinti858fJN = BigInt("78")
		const boolxgiCi5C = await HungryHoodyUHLThpe.transferFrom.call(addressJM3soCv, addresskjGBi7e, uintOKhZqe, {from: accounts[3]});
		const uintLHLC6vk = await HungryHoodyUHLThpe.safeSub.call(uinti858fJN, uintpJcKmjm, {from: accounts[0]});

		await expect(HungryHoodyUHLThpe.transferFrom.call(addressJM3soCv, addresskjGBi7e, uintOKhZqe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})