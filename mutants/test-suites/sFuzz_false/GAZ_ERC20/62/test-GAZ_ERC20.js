const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const uintEmQDit = BigInt("122")
		const addresswXUHdAW = accounts[0]
		const addressx3W6ySO = accounts[2]
		const addressXeRNCS = accounts[4]
//		const boolpsa8MZQ = await GAZ_ERC20c3sOjSh.transferFrom.call(addressx3W6ySO, addresswXUHdAW, uintEmQDit, {from: accounts[4]});
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addressXeRNCS, {from: accounts[2]});

		await expect(GAZ_ERC20c3sOjSh.transferFrom.call(addressx3W6ySO, addresswXUHdAW, uintEmQDit, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20wugi8ia = await GAZ_ERC20.new({from: accounts[2]});
		const uintemBCxen = BigInt("1940")
		const addressgAf9PCf = accounts[3]
		const uintPutcZ82 = BigInt("1391")
		const addressWyMzc2 = accounts[1]
		const uintwIHR3l = BigInt("152")
		const addressTJKKUWP = accounts[0]
		const addressHa5mtdJ = accounts[5]
		const uintQ19ZCG = BigInt("1825")
		const addresstaDpq2d = accounts[5]
		const addressckoxra = accounts[2]
		const uintBnzq3jq = BigInt("1590")
		const addressmyIX3vI = accounts[4]
//		const boolAnG3oHd = await GAZ_ERC20wugi8ia.transfer.call(addressgAf9PCf, uintemBCxen, {from: accounts[0]});
//		const booljYTNHtX = await GAZ_ERC20wugi8ia.approve.call(addressWyMzc2, uintPutcZ82, {from: accounts[2]});
//		const boolLiUoyhR = await GAZ_ERC20wugi8ia.approve.call(addressTJKKUWP, uintwIHR3l, {from: accounts[1]});
//		const boolU4gw5Qp = await GAZ_ERC20wugi8ia.approve.call(addressHa5mtdJ, {from: accounts[3]});
//		const boolkSHVgcv = await GAZ_ERC20wugi8ia.transferFrom.call(addressckoxra, addresstaDpq2d, uintQ19ZCG, {from: accounts[0]});
//		const boold8Nt1r3 = await GAZ_ERC20wugi8ia.approve.call(addressmyIX3vI, uintBnzq3jq, {from: accounts[5]});

		await expect(GAZ_ERC20wugi8ia.transfer.call(addressgAf9PCf, uintemBCxen, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LjoWcCU = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHhSRizt = BigInt("872")
		const addressRwlGRJV = accounts[1]
		const uintzdDsm0b = BigInt("370")
		const addressESoGQpl = accounts[3]
		const addressDJsRzEk = accounts[5]
		const uintNrZqAlL = BigInt("540")
		const addressCmeHczV = accounts[3]
		const addressPEQAAnZ = accounts[0]
		const boolVzt6lL8 = await GAZ_ERC20LjoWcCU.transfer.call(addressRwlGRJV, uintHhSRizt, {from: accounts[2]});
		const boolx7blOdB = await GAZ_ERC20LjoWcCU.approve.call(addressESoGQpl, uintzdDsm0b, {from: accounts[1]});
		const boolSQHrNDf = await GAZ_ERC20LjoWcCU.approve.call(addressDJsRzEk, {from: accounts[2]});
		const boolUKrofCH = await GAZ_ERC20LjoWcCU.transferFrom.call(addressPEQAAnZ, addressCmeHczV, uintNrZqAlL, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20bdCbwmb = await GAZ_ERC20.new({from: accounts[2]});
		const uintsDDf73h = BigInt("907")
		const addressSldbyJn = accounts[2]
		const uintBJCVvjZ = BigInt("927")
		const addresstVnv5KT = accounts[0]
		const addressgUrk8R = accounts[1]
		const boolIHDrcOt = await GAZ_ERC20bdCbwmb.transfer.call(addressSldbyJn, uintsDDf73h, {from: accounts[2]});
//		const boolgKE9z0 = await GAZ_ERC20bdCbwmb.transferFrom.call(addressgUrk8R, addresstVnv5KT, uintBJCVvjZ, {from: accounts[4]});

		assert.equal(boolIHDrcOt, true)
		await expect(GAZ_ERC20bdCbwmb.transferFrom.call(addressgUrk8R, addresstVnv5KT, uintBJCVvjZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20AOLIYP9 = await GAZ_ERC20.new({from: accounts[1]});
		const addresswXEVbG5 = accounts[2]
		const addresstHYGWu9 = accounts[1]
		const uintoqpdifa = BigInt("936")
		const addressejfooKI = accounts[3]
		const uintEXJGtyk = BigInt("615")
		const addressVrq6Yqv = accounts[1]
		const uints4C5PF4 = BigInt("1043")
		const addresskWKNFXC = accounts[2]
		const addressZfdZgY5 = accounts[0]
//		const boolenyAOtW = await GAZ_ERC20AOLIYP9.approve.call(addresswXEVbG5, {from: accounts[4]});
//		const booln1linns = await GAZ_ERC20AOLIYP9.approve.call(addresstHYGWu9, {from: accounts[0]});
//		const boolWXHbkf4 = await GAZ_ERC20AOLIYP9.approve.call(addressejfooKI, uintoqpdifa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSrKC55B = await GAZ_ERC20AOLIYP9.transfer.call(addressVrq6Yqv, uintEXJGtyk, {from: accounts[3]});
//		const boolO9tSvxr = await GAZ_ERC20AOLIYP9.approve.call(addresskWKNFXC, uints4C5PF4, {from: accounts[2]});
//		const boolSZzv8AO = await GAZ_ERC20AOLIYP9.approve.call(addressZfdZgY5, {from: accounts[4]});

		await expect(GAZ_ERC20AOLIYP9.approve.call(addresswXEVbG5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20QyfxLa = await GAZ_ERC20.new({from: accounts[5]});
		const uintblS6gjd = BigInt("1104")
		const addressOTBfUgj = accounts[4]
		const uintcX2xTVK = BigInt("1800")
		const addresspYMLR4 = accounts[1]
		const addressj2QOXqd = "0x0000000000000000000000000000000000000001"
		const uintpivQfd = BigInt("1423")
		const addressHVptX1t = accounts[2]
		const boolepAbMpS = await GAZ_ERC20QyfxLa.approve.call(addressOTBfUgj, uintblS6gjd, {from: accounts[1]});
		const boolpdjq3Fp = await GAZ_ERC20QyfxLa.approve.call(addresspYMLR4, uintcX2xTVK, {from: accounts[4]});
//		const boolbMDMXNs = await GAZ_ERC20QyfxLa.approve.call(addressj2QOXqd, {from: accounts[4]});
//		const boolEAtI78L = await GAZ_ERC20QyfxLa.transfer.call(addressHVptX1t, uintpivQfd, {from: accounts[0]});

		assert.equal(boolepAbMpS, true)
		assert.equal(boolpdjq3Fp, true)
		await expect(GAZ_ERC20QyfxLa.approve.call(addressj2QOXqd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20P3XzkXq = await GAZ_ERC20.new({from: accounts[5]});
		const addressisoUXi = accounts[0]
		const uintCikuc9 = BigInt("1166")
		const addressEAyxX5 = accounts[3]
		const uintkkz58Dj = BigInt("576")
		const address6DEFrg = accounts[1]
		const uintxMiAnNi = BigInt("389")
		const addressKrFIjMU = "0x0000000000000000000000000000000000000001"
//		const boolmE9khV = await GAZ_ERC20P3XzkXq.approve.call(addressisoUXi, {from: accounts[1]});
//		const boolFLZEasg = await GAZ_ERC20P3XzkXq.approve.call(addressEAyxX5, uintCikuc9, {from: accounts[1]});
//		const boolo3kcx7v = await GAZ_ERC20P3XzkXq.approve.call(address6DEFrg, uintkkz58Dj, {from: accounts[3]});
//		const boolsbcItGa = await GAZ_ERC20P3XzkXq.approve.call(addressKrFIjMU, uintxMiAnNi, {from: accounts[1]});

		await expect(GAZ_ERC20P3XzkXq.approve.call(addressisoUXi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const addresszlujKmp = accounts[4]
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addresszlujKmp, {from: accounts[2]});

		await expect(GAZ_ERC20c3sOjSh.approve.call(addresszlujKmp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const addressv6PNY8J = accounts[0]
		const addresszpuu2hE = accounts[5]
//		const booliGQ5G7s = await GAZ_ERC20c3sOjSh.approve.call(addressv6PNY8J, {from: accounts[3]});
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addresszpuu2hE, {from: accounts[2]});

		await expect(GAZ_ERC20c3sOjSh.approve.call(addressv6PNY8J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const addresszdh9FQ = accounts[0]
		const addressMr2z9Mt = accounts[5]
		const uintkU21zoC = BigInt("1010")
		const addressljxOj5Z = accounts[2]
//		const boollsnDoSK = await GAZ_ERC20c3sOjSh.approve.call(addresszdh9FQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addressMr2z9Mt, {from: accounts[2]});
//		const boolTIbY68C = await GAZ_ERC20c3sOjSh.transfer.call(addressljxOj5Z, uintkU21zoC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GAZ_ERC20c3sOjSh.approve.call(addresszdh9FQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const uintT1gsbX6 = BigInt("1602")
		const addresstS5jXhV = accounts[0]
		const addresszV2v7lG = accounts[4]
		const uintPWf5Ldp = BigInt("1095")
		const addressdrfbksk = accounts[1]
		const addressxvVt30s = accounts[5]
		const booluKfJMjD = await GAZ_ERC20c3sOjSh.approve.call(addresstS5jXhV, uintT1gsbX6, {from: accounts[1]});
//		const boolrZrCMuI = await GAZ_ERC20c3sOjSh.approve.call(addresszV2v7lG, {from: accounts[0]});
//		const booleAYLzU = await GAZ_ERC20c3sOjSh.approve.call(addressdrfbksk, uintPWf5Ldp, {from: accounts[0]});
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addressxvVt30s, {from: accounts[2]});

		assert.equal(booluKfJMjD, true)
		await expect(GAZ_ERC20c3sOjSh.approve.call(addresszV2v7lG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20c3sOjSh = await GAZ_ERC20.new({from: accounts[4]});
		const addressPSGBIAG = accounts[4]
		const addresssw5XC6U = accounts[5]
//		const boolvTKbFwj = await GAZ_ERC20c3sOjSh.approve.call(addressPSGBIAG, {from: accounts[5]});
//		const boolIIKEy9V = await GAZ_ERC20c3sOjSh.approve.call(addresssw5XC6U, {from: accounts[2]});

		await expect(GAZ_ERC20c3sOjSh.approve.call(addressPSGBIAG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})