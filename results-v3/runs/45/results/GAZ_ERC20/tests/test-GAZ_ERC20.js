const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const uinteJHOPVu = BigInt("904")
		const addressYzLnJK = accounts[2]
		const addressbfRWxwH = accounts[5]
		const uintJ0gVCn = BigInt("1098")
		const addressGE8Vbda = accounts[5]
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressbfRWxwH, addressYzLnJK, uinteJHOPVu, {from: "0x0000000000000000000000000000000000000001"});
		const boolVJaQtH = await GAZ_ERC20zQJ2U6x.approve.call(addressGE8Vbda, uintJ0gVCn, {from: accounts[1]});

		await expect(GAZ_ERC20zQJ2U6x.transferFrom.call(addressbfRWxwH, addressYzLnJK, uinteJHOPVu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Vdskm6c = await GAZ_ERC20.new({from: accounts[0]});
		const uintQSfpa0Q = BigInt("1517")
		const addressX69io0s = "0x0000000000000000000000000000000000000001"
		const uintsKxnOKd = BigInt("1045")
		const addressoDHdsZc = accounts[4]
		const addresspY43yH = accounts[3]
		const boolbJYeuyO = await GAZ_ERC20Vdskm6c.approve.call(addressX69io0s, uintQSfpa0Q, {from: accounts[4]});
		const boolKbenTGH = await GAZ_ERC20Vdskm6c.approve.call(addressoDHdsZc, uintsKxnOKd, {from: accounts[0]});
		const boolobcqGni = await GAZ_ERC20Vdskm6c.approve.call(addresspY43yH, {from: accounts[2]});

		assert.equal(boolKbenTGH, true)
		assert.equal(boolbJYeuyO, true)
		await expect(GAZ_ERC20Vdskm6c.approve.call(addresspY43yH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zbGsQA = await GAZ_ERC20.new({from: accounts[0]});
		const uintBeHk1mP = BigInt("2001")
		const addressRF37Iu1 = "0x0000000000000000000000000000000000000001"
		const uint76Bac1 = BigInt("831")
		const addressPqiNgYU = accounts[4]
		const uintQTZV9GP = BigInt("1613")
		const addressRfwRNAV = accounts[2]
		const uintlF7lo4h = BigInt("824")
		const addressRLJJak7 = accounts[3]
		const boolmWoOK9g = await GAZ_ERC20zbGsQA.transfer.call(addressRF37Iu1, uintBeHk1mP, {from: accounts[3]});
		const boolHSFkyHa = await GAZ_ERC20zbGsQA.approve.call(addressPqiNgYU, uint76Bac1, {from: "0x0000000000000000000000000000000000000001"});
		const boolOIhXGEO = await GAZ_ERC20zbGsQA.transfer.call(addressRfwRNAV, uintQTZV9GP, {from: accounts[3]});
		const boolJnEK7z = await GAZ_ERC20zbGsQA.approve.call(addressRLJJak7, uintlF7lo4h, {from: accounts[0]});

		await expect(GAZ_ERC20zbGsQA.transfer.call(addressRF37Iu1, uintBeHk1mP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Y5NWKeL = await GAZ_ERC20.new({from: accounts[3]});
		const uintkSVgeVG = BigInt("1660")
		const addressV6s9vwm = accounts[1]
		const uintL4jQenv = BigInt("1581")
		const addressoqrH0O5 = accounts[0]
		const uintpFcR8kV = BigInt("1030")
		const addressXjgiisr = accounts[2]
		const boolfmOYqY = await GAZ_ERC20Y5NWKeL.transfer.call(addressV6s9vwm, uintkSVgeVG, {from: accounts[3]});
		const boolRgXkBOU = await GAZ_ERC20Y5NWKeL.approve.call(addressoqrH0O5, uintL4jQenv, {from: accounts[3]});
		const boolJ8cbHtp = await GAZ_ERC20Y5NWKeL.approve.call(addressXjgiisr, uintpFcR8kV, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ8cbHtp, true)
		assert.equal(boolRgXkBOU, true)
		assert.equal(boolfmOYqY, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZDcTZbX = await GAZ_ERC20.new({from: accounts[2]});
		const addressCRypAr2 = accounts[1]
		const addressMOaVQzZ = accounts[4]
		const addressK45Eaqz = "0x0000000000000000000000000000000000000001"
		const uintcztseha = BigInt("1592")
		const addressSezdBnl = accounts[0]
		const uintYn6rNL4 = BigInt("518")
		const addressjVIVek = accounts[3]
		const boolufGhPU5 = await GAZ_ERC20ZDcTZbX.approve.call(addressCRypAr2, {from: accounts[4]});
		const boolTFqECcr = await GAZ_ERC20ZDcTZbX.approve.call(addressMOaVQzZ, {from: accounts[1]});
		const boolTRhLSmA = await GAZ_ERC20ZDcTZbX.approve.call(addressK45Eaqz, {from: accounts[5]});
		const boolTL1o5cC = await GAZ_ERC20ZDcTZbX.transfer.call(addressSezdBnl, uintcztseha, {from: accounts[1]});
		const boolt4TJM3h = await GAZ_ERC20ZDcTZbX.transfer.call(addressjVIVek, uintYn6rNL4, {from: accounts[3]});

		await expect(GAZ_ERC20ZDcTZbX.approve.call(addressCRypAr2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC207FMpvW = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintV4RYfxi = BigInt("935")
		const addressiBGOctg = accounts[0]
		const uintC7Rowf = BigInt("17")
		const addressuuDmnLU = accounts[5]
		const uintaopc2Ef = BigInt("1505")
		const addresscpJmFXR = accounts[3]
		const uintsHL0NoC = BigInt("213")
		const addressPFlYUFD = accounts[0]
		const addressRxcdA18 = accounts[3]
		const boolKE21RKU = await GAZ_ERC207FMpvW.transfer.call(addressiBGOctg, uintV4RYfxi, {from: accounts[1]});
		const bool1uO8Gu = await GAZ_ERC207FMpvW.approve.call(addressuuDmnLU, uintC7Rowf, {from: accounts[0]});
		const boolevbHs2 = await GAZ_ERC207FMpvW.approve.call(addresscpJmFXR, uintaopc2Ef, {from: accounts[0]});
		const boolyPBXVs8 = await GAZ_ERC207FMpvW.approve.call(addressPFlYUFD, uintsHL0NoC, {from: accounts[2]});
		const boolGhyoUk1 = await GAZ_ERC207FMpvW.approve.call(addressRxcdA18, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const addressZCt7fFX = accounts[3]
		const uintrG6d6Rm = BigInt("904")
		const addressxNWevEh = accounts[2]
		const addressrcq7RKr = accounts[6]
		const boolizI3aeJ = await GAZ_ERC20zQJ2U6x.approve.call(addressZCt7fFX, {from: accounts[0]});
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressrcq7RKr, addressxNWevEh, uintrG6d6Rm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20zQJ2U6x.approve.call(addressZCt7fFX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const addressX6Rhx46 = accounts[5]
		const uintGVqeOXH = BigInt("912")
		const addressMiZA6Zp = accounts[1]
		const uintnY9TZ6 = BigInt("904")
		const addressZib2dlk = accounts[2]
		const addressoKE4DmA = accounts[5]
		const boolgfvgjRU = await GAZ_ERC20zQJ2U6x.approve.call(addressX6Rhx46, {from: accounts[1]});
		const boolJ3jKyof = await GAZ_ERC20zQJ2U6x.transfer.call(addressMiZA6Zp, uintGVqeOXH, {from: accounts[3]});
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressoKE4DmA, addressZib2dlk, uintnY9TZ6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20zQJ2U6x.approve.call(addressX6Rhx46, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const addressl4RmqmS = accounts[4]
		const uintaGNF0xS = BigInt("1651")
		const addressFweyR3a = accounts[2]
		const addresscfSHYa4 = accounts[0]
		const uintH210bv3 = BigInt("904")
		const addressPEbA66R = accounts[2]
		const addressEvgWjzQ = accounts[5]
		const uintouUqIbZ = BigInt("693")
		const addressG2dV649 = accounts[2]
		const addressX4sfzWp = accounts[0]
		const addresskAGbsE7 = accounts[2]
		const boolDPdvBqV = await GAZ_ERC20zQJ2U6x.approve.call(addressl4RmqmS, {from: "0x0000000000000000000000000000000000000001"});
		const boolrp8epTt = await GAZ_ERC20zQJ2U6x.transferFrom.call(addresscfSHYa4, addressFweyR3a, uintaGNF0xS, {from: "0x0000000000000000000000000000000000000001"});
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressEvgWjzQ, addressPEbA66R, uintH210bv3, {from: "0x0000000000000000000000000000000000000001"});
		const boolL7688p1 = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressX4sfzWp, addressG2dV649, uintouUqIbZ, {from: "0x0000000000000000000000000000000000000001"});
		const booltj4QlH2 = await GAZ_ERC20zQJ2U6x.approve.call(addresskAGbsE7, {from: accounts[5]});

		await expect(GAZ_ERC20zQJ2U6x.approve.call(addressl4RmqmS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const addressuYRR68b = accounts[1]
		const uintGsICInN = BigInt("904")
		const addressl8gaTcs = accounts[2]
		const addressk4psKIR = accounts[6]
		const boolTLlPFPD = await GAZ_ERC20zQJ2U6x.approve.call(addressuYRR68b, {from: accounts[5]});
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressk4psKIR, addressl8gaTcs, uintGsICInN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20zQJ2U6x.approve.call(addressuYRR68b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20zQJ2U6x = await GAZ_ERC20.new({from: accounts[0]});
		const addressKyTkoiy = accounts[2]
		const uintcpq22Gg = BigInt("1197")
		const addressgErdfbm = accounts[4]
		const addressNqBmn1e = accounts[4]
		const uint38SMaZ = BigInt("885")
		const addressHF3IC82 = accounts[2]
		const addressaHsvGGm = accounts[5]
		const boolE7XphrM = await GAZ_ERC20zQJ2U6x.approve.call(addressKyTkoiy, {from: accounts[3]});
		const boolRC2givc = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressNqBmn1e, addressgErdfbm, uintcpq22Gg, {from: accounts[4]});
		const boolGnAU3pj = await GAZ_ERC20zQJ2U6x.transferFrom.call(addressaHsvGGm, addressHF3IC82, uint38SMaZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20zQJ2U6x.approve.call(addressKyTkoiy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})