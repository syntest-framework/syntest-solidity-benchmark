const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringRq67qpY = "LHTaNvASHzl9EIcpZAUlRn6iEvG5LagVQ8HzpA7MEjjCcnLxGCBmwmlPybNwPquEQ00ew4jVuspKUOwtlayFFq1b"
		const stringnr4irr = "7I37tLfJsSzlazO02xsE8sobtzbdveI8Paha2hvccKWsjWb"
		const uintAiQfhj = BigInt("109")
		const WheatFarmtMScPeG = await WheatFarm.new(stringRq67qpY, stringnr4irr, uintAiQfhj, {from: accounts[5]});
		const uintHrk9TZk = BigInt("688")
		const addressO8NwcPk = accounts[1]
		const uint6OFVFg = BigInt("596")
		const addressAKmdTr = accounts[1]
		const addressh9qNJT2 = accounts[2]
		const addressqFfpPCl = accounts[4]
		const stringq2blUq4 = await WheatFarmtMScPeG.symbol.call({from: accounts[2]});
//		const boolAczfhsA = await WheatFarmtMScPeG.approveAndCall.call(addressO8NwcPk, uintHrk9TZk, {from: accounts[4]});
//		const boolbfcnktY = await WheatFarmtMScPeG.approve.call(addressAKmdTr, uint6OFVFg, {from: accounts[0]});
//		const uintJcVNFHM = await WheatFarmtMScPeG.allowance.call(addressqFfpPCl, addressh9qNJT2, {from: accounts[0]});

		assert.equal(stringq2blUq4, "7I37tLfJsSzlazO02xsE8sobtzbdveI8Paha2hvccKWsjWb")
		await expect(WheatFarmtMScPeG.approveAndCall.call(addressO8NwcPk, uintHrk9TZk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKJ9lGMs = "naIjgLMLulSBgC2Lbdp79aTZOP7Z9awQmDzkLueV9WOh02cUaMktiqpAt6PFr1JojRP1cNmpRTSEDqs44QgdoIDTFA"
		const stringzcZAwPs = "XJxqSlixqP1GaXrtS5Wuw1vgDV6fkOQSw5x7QENB8i3cMKZd6lHLK5Lsw5gaRR6J08TUdju1"
		const uintSM8Lolq = BigInt("130")
		const WheatFarmrmNzJbj = await WheatFarm.new(stringKJ9lGMs, stringzcZAwPs, uintSM8Lolq, {from: accounts[3]});
		const addresskwWxT91 = accounts[3]
		const addresshYsqjv0 = accounts[2]
		const uintvEwt85x = BigInt("958")
		const addresselXr3qh = accounts[3]
		const uintaw4bFAn = BigInt("1073")
		const addressA8S30uX = accounts[3]
		const stringRnx2460 = await WheatFarmrmNzJbj.symbol.call({from: accounts[2]});
		const uintabfIpfV = await WheatFarmrmNzJbj.allowance.call(addresshYsqjv0, addresskwWxT91, {from: accounts[2]});
//		const boolrZKXyc9 = await WheatFarmrmNzJbj.transfer.call(addresselXr3qh, uintvEwt85x, {from: accounts[0]});
//		const booldM0Zal = await WheatFarmrmNzJbj.transfer.call(addressA8S30uX, uintaw4bFAn, {from: accounts[2]});

		assert.equal(stringRnx2460, "XJxqSlixqP1GaXrtS5Wuw1vgDV6fkOQSw5x7QENB8i3cMKZd6lHLK5Lsw5gaRR6J08TUdju1")
		assert.equal(uintabfIpfV, BigInt("0"))
		await expect(WheatFarmrmNzJbj.transfer.call(addresselXr3qh, uintvEwt85x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringysLoOj = "W25wzg81NgQjuTt59758tArwFyjD5kxuhNPZjH"
		const stringMDnbcb5 = "HgdGaC8O2CKCrU4peLJgM9RTdt1NPvnbmJqDQWdHJ0pIeKwXtgoDFABKeHtAzIEorpC9EKQyZyrsHufix"
		const uint28up94 = BigInt("33")
		const WheatFarmJYiARf3 = await WheatFarm.new(stringysLoOj, stringMDnbcb5, uint28up94, {from: accounts[4]});
		const uintbPhIJia = BigInt("1344")
		const addressPwnwnFe = accounts[2]
		const addressA748sLD = accounts[3]
		const uintRIhHcuX = BigInt("1686")
		const addressExqK6OX = accounts[5]
//		const boolYZZtLJt = await WheatFarmJYiARf3.transferFrom.call(addressA748sLD, addressPwnwnFe, uintbPhIJia, {from: accounts[3]});
//		const boolADPZ4w0 = await WheatFarmJYiARf3.decreaseAllowance.call(addressExqK6OX, uintRIhHcuX, {from: accounts[2]});
//		const uintDrvpKDX = await WheatFarmJYiARf3.totalSupply.call({from: accounts[4]});
//		const stringjIbOZO = await WheatFarmJYiARf3.name.call({from: accounts[2]});

		await expect(WheatFarmJYiARf3.transferFrom.call(addressA748sLD, addressPwnwnFe, uintbPhIJia, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringdJhKq7P = "tU05ohS5fmFsrUriMJh8BM3b2jXmwHdXsJm83i"
		const stringuqA9iO5 = "KFoSaihwqYlioEkVMSJ2CvDWO4oPb3l2Ix23zWHbN1dfLCgNL8TJRJrfb9AWmcp"
		const uintv6cEwfJ = BigInt("232")
		const WheatFarmNhpklrv = await WheatFarm.new(stringdJhKq7P, stringuqA9iO5, uintv6cEwfJ, {from: accounts[2]});
		const uintLRFlley = BigInt("522")
		const addressljyrap = accounts[1]
		const addressXGu9zwC = accounts[1]
		const uintiCRMgCK = BigInt("981")
		const addressucwm6bD = accounts[1]
		const uintg2JcKec = BigInt("2002")
		const addressXQdzHoz = accounts[3]
		const stringoESKE6n = await WheatFarmNhpklrv.name.call({from: accounts[4]});
//		const booljLcUTN = await WheatFarmNhpklrv.transferFrom.call(addressXGu9zwC, addressljyrap, uintLRFlley, {from: accounts[2]});
//		const boolSGM4Pdy = await WheatFarmNhpklrv.decreaseAllowance.call(addressucwm6bD, uintiCRMgCK, {from: accounts[2]});
//		const boolxnJXr7l = await WheatFarmNhpklrv.approveAndCall.call(addressXQdzHoz, uintg2JcKec, {from: "0x0000000000000000000000000000000000000001"});
//		const stringqFiGnAd = await WheatFarmNhpklrv.symbol.call({from: accounts[3]});

		assert.equal(stringoESKE6n, "tU05ohS5fmFsrUriMJh8BM3b2jXmwHdXsJm83i")
		await expect(WheatFarmNhpklrv.transferFrom.call(addressXGu9zwC, addressljyrap, uintLRFlley, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringbH5kBxg = "BRriy2esr4SE59pRxKs"
		const stringu1ZaHo = "K4AUvJylPImG1cPOKU47s5xVoOJa4"
		const uintnMZ9JU4 = BigInt("182")
		const WheatFarmpjMDFOU = await WheatFarm.new(stringbH5kBxg, stringu1ZaHo, uintnMZ9JU4, {from: accounts[4]});
		const addressGBvbH4n = accounts[3]
		const uintVWAJzPv = BigInt("970")
		const addressc5VNw5q = accounts[2]
		const uinto2OH8il = BigInt("251")
		const addressAXkO9gw = accounts[5]
		const uintym4WxP = await WheatFarmpjMDFOU.balanceOf.call(addressGBvbH4n, {from: accounts[3]});
//		const boolfkyqmjq = await WheatFarmpjMDFOU.decreaseAllowance.call(addressc5VNw5q, uintVWAJzPv, {from: accounts[1]});
//		const boolQg9hTHQ = await WheatFarmpjMDFOU.approve.call(addressAXkO9gw, uinto2OH8il, {from: accounts[3]});

		assert.equal(uintym4WxP, BigInt("0"))
		await expect(WheatFarmpjMDFOU.decreaseAllowance.call(addressc5VNw5q, uintVWAJzPv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringdJhKq7P = "tU05ohS5fmFsrUriMJh8BM3b2jXmwHdXsJm83i"
		const stringuqA9iO5 = "KFoSaihwqYlioEkVMSJ2CvDWO4oPb3l2Ix23zWHbN1dfLCgNL8TJRJrfb9AWmcp"
		const uintjSjmHGE = BigInt("232")
		const WheatFarmNhpklrv = await WheatFarm.new(stringdJhKq7P, stringuqA9iO5, uintjSjmHGE, {from: accounts[2]});
		const addressvlLyaGX = accounts[1]
		const uintdpV1pRR = BigInt("488")
		const addressN4RrodB = accounts[1]
		const addressyAw766L = accounts[1]
		const uint7UTqRl = BigInt("981")
		const addressP7vgzce = accounts[1]
		const uint65ATnU = BigInt("2004")
		const addressUQKV9UL = accounts[3]
		const uintgOgEj1s = BigInt("285")
		const addressP75gGL = accounts[5]
		const uintCUVOuqP = BigInt("9")
		const addressN5gxI6Y = accounts[0]
		const addressOdspWn = accounts[4]
		const uintrEZ3Qpp = BigInt("684")
		const addressBskus57 = "0x0000000000000000000000000000000000000001"
		const stringoESKE6n = await WheatFarmNhpklrv.name.call({from: accounts[4]});
//		const booleT7B6ZQ = await WheatFarmNhpklrv.transferownership.call(addressvlLyaGX, {from: accounts[3]});
//		const booljLcUTN = await WheatFarmNhpklrv.transferFrom.call(addressyAw766L, addressN4RrodB, uintdpV1pRR, {from: accounts[2]});
//		const boolSGM4Pdy = await WheatFarmNhpklrv.decreaseAllowance.call(addressP7vgzce, uint7UTqRl, {from: accounts[2]});
//		const boolxnJXr7l = await WheatFarmNhpklrv.approveAndCall.call(addressUQKV9UL, uint65ATnU, {from: "0x0000000000000000000000000000000000000001"});
//		const stringqFiGnAd = await WheatFarmNhpklrv.symbol.call({from: accounts[3]});
//		const boolx2jsFc = await WheatFarmNhpklrv.transfer.call(addressP75gGL, uintgOgEj1s, {from: accounts[4]});
//		const boolAHwQ6G8 = await WheatFarmNhpklrv.transferFrom.call(addressOdspWn, addressN5gxI6Y, uintCUVOuqP, {from: accounts[1]});
//		const boolPyG36Rw = await WheatFarmNhpklrv.approve.call(addressBskus57, uintrEZ3Qpp, {from: accounts[1]});

		assert.equal(stringoESKE6n, "tU05ohS5fmFsrUriMJh8BM3b2jXmwHdXsJm83i")
		await expect(WheatFarmNhpklrv.transferownership.call(addressvlLyaGX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringz3nwkFZ = "dcapovZ8tMQphwtAOuzOMUV1QUGJrHrr8bp4XdQfpoF3GOII1jmq998Kvb3Xr8kz"
		const stringWgi08gF = "BVFpNJUeu"
		const uintG2uVFF = BigInt("228")
		const WheatFarmLo92QAD = await WheatFarm.new(stringz3nwkFZ, stringWgi08gF, uintG2uVFF, {from: accounts[4]});
		const uintz5bEY8w = BigInt("1940")
		const addressQBRzsHu = accounts[5]
		const uintJtkqIFM = BigInt("853")
		const addressVuz1wZi = accounts[4]
		const uintmfgN7Hq = BigInt("663")
		const addressEcW2tHn = accounts[3]
		const boolUlmiQkL = await WheatFarmLo92QAD.approve.call(addressQBRzsHu, uintz5bEY8w, {from: accounts[4]});
//		const boolT9iW83X = await WheatFarmLo92QAD.transfer.call(addressVuz1wZi, uintJtkqIFM, {from: accounts[1]});
//		const stringvb81Ox6 = await WheatFarmLo92QAD.name.call({from: accounts[3]});
//		const stringndMj9VL = await WheatFarmLo92QAD.name.call({from: accounts[3]});
//		const boolZmD7AZf = await WheatFarmLo92QAD.transfer.call(addressEcW2tHn, uintmfgN7Hq, {from: accounts[2]});

		assert.equal(boolUlmiQkL, true)
		await expect(WheatFarmLo92QAD.transfer.call(addressVuz1wZi, uintJtkqIFM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringysLoOj = "W25wzg81NgQjuTt59758tArwFyjD5kxuhNPZjH"
		const stringMDnbcb5 = "HgdGaC8O2CKCrU4peLJgM9RTdt1NPvnbmJqDQWdHJ0pIeKwXtgoDFABKeHtAzIEorpC9EKQyZyrsHufix"
		const uintbyfckpk = BigInt("33")
		const WheatFarmJYiARf3 = await WheatFarm.new(stringysLoOj, stringMDnbcb5, uintbyfckpk, {from: accounts[4]});
		const addressWcpWgHi = accounts[1]
		const uintLqAwP83 = BigInt("1263")
		const addressbSEbVm = accounts[3]
		const addressqwPADD2 = accounts[1]
		const uintJK7vuuZ = BigInt("1364")
		const addressZ1pfuHJ = accounts[2]
		const addressBO1EBS = accounts[3]
		const boolOKPHlqC = await WheatFarmJYiARf3.transferownership.call(addressWcpWgHi, {from: accounts[4]});
//		const booly3oyTnZ = await WheatFarmJYiARf3.transferFrom.call(addressqwPADD2, addressbSEbVm, uintLqAwP83, {from: accounts[0]});
//		const uintefsCnWe = await WheatFarmJYiARf3.totalSupply.call({from: accounts[2]});
//		const boolYZZtLJt = await WheatFarmJYiARf3.transferFrom.call(addressBO1EBS, addressZ1pfuHJ, uintJK7vuuZ, {from: accounts[3]});

		assert.equal(boolOKPHlqC, true)
		await expect(WheatFarmJYiARf3.transferFrom.call(addressqwPADD2, addressbSEbVm, uintLqAwP83, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringeTuqlIq = "ur8oyPifeVcdJtbDNu0zvRY1qi4NSsHqFpSrN4V9pLs5iQ39NomurpyI4qzHVnbOVjhEcHDCwc6ZLRxaYY9EaBiA2IS0Wb"
		const stringdjsDP2n = "bp6sepGFltHgTiB1TJ3clXpdERL7Ij1iFXR5NR6qpcB94ztqaK3Clq2lGrLemgEY8NQeUwv3LXOlptBoiPc2"
		const uintqvwHAsF = BigInt("938")
		const WheatFarmE73VR6i = await WheatFarm.new(stringeTuqlIq, stringdjsDP2n, uintqvwHAsF, {from: "0x0000000000000000000000000000000000000001"});
		const uintY3oZBo6 = BigInt("602")
		const addressjtcAkyD = accounts[0]
		const addresstysKLEu = accounts[2]
		const uintiUjiloB = BigInt("1032")
		const addressEkS40y = accounts[3]
		const boolfYRlum = await WheatFarmE73VR6i.transferFrom.call(addresstysKLEu, addressjtcAkyD, uintY3oZBo6, {from: accounts[1]});
		const uinti5eagx6 = await WheatFarmE73VR6i.totalSupply.call({from: accounts[3]});
		const stringoXwclF = await WheatFarmE73VR6i.name.call({from: accounts[1]});
		const boolWTjRGlY = await WheatFarmE73VR6i.approve.call(addressEkS40y, uintiUjiloB, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringHvW18SG = "5z3JsmLr6OIR8TjVIFt5IHZXehPhwIAYT7ubMqopjyuV87O2djHwwNvq5eCCRPs9LM1W7"
		const stringOX3RT6q = "HFaXftFS4cEtLTV1fHZ4wcv8xFre5zAOOIOfYMP8NJHsbzNehYsDBRAXyvpd2ze4LWvq6E1Kk"
		const uinteOwOl4j = BigInt("229")
		const WheatFarmknBerJW = await WheatFarm.new(stringHvW18SG, stringOX3RT6q, uinteOwOl4j, {from: accounts[1]});
		const uintre5VqNV = BigInt("1878")
		const addressqqYADPI = accounts[3]
		const uintY7qtAYk = BigInt("666")
		const addresszyB8ySA = accounts[1]
		const uintKIXc8eX = BigInt("1853")
		const addressk376Iv = "0x0000000000000000000000000000000000000001"
		const booldNGn9T = await WheatFarmknBerJW.approveAndCall.call(addressqqYADPI, uintre5VqNV, {from: accounts[1]});
		const boolVJQ2au8 = await WheatFarmknBerJW.approve.call(addresszyB8ySA, uintY7qtAYk, {from: accounts[3]});
		const uintes6uD2r = await WheatFarmknBerJW.totalSupply.call({from: accounts[2]});
		const boolqjvyXWy = await WheatFarmknBerJW.approve.call(addressk376Iv, uintKIXc8eX, {from: accounts[4]});

		assert.equal(boolVJQ2au8, true)
		assert.equal(booldNGn9T, true)
		assert.equal(boolqjvyXWy, true)
		assert.equal(uintes6uD2r, BigInt("229000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringU6NIlK0 = "ok8Hl9ZMhpoSSH"
		const stringhE2ObIH = "v5UDS8qLfoG9konmaucopI5pV2552B6pgRC5GnkALhB48v91ZNgJvmaknI2PxIDBlknod9UOZbnn6L8zP8"
		const uintbKWVikb = BigInt("184")
		const WheatFarmkeOqNKx = await WheatFarm.new(stringU6NIlK0, stringhE2ObIH, uintbKWVikb, {from: accounts[1]});
		const uintO7RaCAS = BigInt("0")
		const addressaFriKYA = accounts[4]
		const boolS3tWLY3 = await WheatFarmkeOqNKx.transfer.call(addressaFriKYA, uintO7RaCAS, {from: accounts[1]});

		assert.equal(boolS3tWLY3, true)
	});

	it('test for WheatFarm', async () => {
		const stringU6NIlK0 = "ok8Hl9ZMhpoSSH"
		const stringhE2ObIH = "v5UDS8qLfoG9konmaucopI5pV2552B6pgRC5GnkALhB48v91ZNgJvmaknI2PxIDBlknod9UOZbnn6L8zP8"
		const uintWxW5335 = BigInt("184")
		const WheatFarmkeOqNKx = await WheatFarm.new(stringU6NIlK0, stringhE2ObIH, uintWxW5335, {from: accounts[1]});
		const uintej2AtDZ = BigInt("0")
		const addressiUm63D8 = accounts[2]
		const uintVi8c9P3 = BigInt("712")
		const addressOs3ZY97 = accounts[3]
		const addressnJ1jld5 = "0x0000000000000000000000000000000000000001"
		const addressbefu1Mr = accounts[0]
		const boolmt1LrIb = await WheatFarmkeOqNKx.approveAndCall.call(addressiUm63D8, uintej2AtDZ, {from: accounts[1]});
//		const boola3XugOF = await WheatFarmkeOqNKx.transferFrom.call(addressnJ1jld5, addressOs3ZY97, uintVi8c9P3, {from: accounts[2]});
//		const uintcg5Avlj = await WheatFarmkeOqNKx.balanceOf.call(addressbefu1Mr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8GqvR7Oc = await WheatFarmkeOqNKx.decimals.call({from: accounts[4]});

		assert.equal(boolmt1LrIb, true)
		await expect(WheatFarmkeOqNKx.transferFrom.call(addressnJ1jld5, addressOs3ZY97, uintVi8c9P3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})