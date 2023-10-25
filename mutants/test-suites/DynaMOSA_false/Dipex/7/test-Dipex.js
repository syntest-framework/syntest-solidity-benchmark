const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringPwSex9i = "xE"
		const stringwy5PBNi = "JxI8YEquHDnf2gg"
		const uintbfUPRmo = BigInt("1847")
		const DipexNZTnHhu = await Dipex.new(stringPwSex9i, stringwy5PBNi, uintbfUPRmo, {from: accounts[1]});
		const uintesoIKLt = BigInt("285")
		const addressI5qhLOi = accounts[5]
		const uintpifyljE = BigInt("680")
		const addressaiy37RD = accounts[1]
		const boolJBznMCV = await DipexNZTnHhu.approveAndCall.call(addressI5qhLOi, uintesoIKLt, {from: accounts[1]});
//		const boolD7usvsr = await DipexNZTnHhu.approveAndCall.call(addressaiy37RD, uintpifyljE, {from: accounts[3]});

		assert.equal(boolJBznMCV, true)
		await expect(DipexNZTnHhu.approveAndCall.call(addressaiy37RD, uintpifyljE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringY5tw983 = "WSDUi6ycf6lXoHl4Y61qQlpKBecJz3Tb93K"
		const stringWbh0w3j = "bEczSLzS5ETOxuXtnxJ5Sfb1rs6aQVdDvSBypmHF3CFzfasNu1CJUlg7cyNUIfYBeHjB2sYp1ioPlJBDwCWqdiKRD"
		const uint4ZNdfU = BigInt("1333")
		const DipexddFBcxx = await Dipex.new(stringY5tw983, stringWbh0w3j, uint4ZNdfU, {from: accounts[4]});
		const uinteyi0SrU = BigInt("1361")
		const addressLqvHmuQ = accounts[0]
		const addressSee2o92 = "0x0000000000000000000000000000000000000001"
		const uintguRCO9 = BigInt("599")
		const addressOPhlOq = accounts[2]
		const uintY5ouMRJ = BigInt("828")
		const addressDQ1fI1h = accounts[2]
		const uintN0TXKiK = BigInt("837")
		const addressKWZjQxd = accounts[3]
		const uintGTQ52CL = BigInt("1166")
		const addressyLzIdWu = accounts[1]
		const uintJQNzW1p = BigInt("1241")
		const addressgH81se7 = accounts[2]
		const addresse2RDdw = accounts[2]
//		const boolOdDhiU4 = await DipexddFBcxx.transferFrom.call(addressSee2o92, addressLqvHmuQ, uinteyi0SrU, {from: accounts[4]});
//		const boolJCdXmtU = await DipexddFBcxx.approveAndCall.call(addressOPhlOq, uintguRCO9, {from: accounts[2]});
//		const boolFOS4PCr = await DipexddFBcxx.approveAndCall.call(addressDQ1fI1h, uintY5ouMRJ, {from: accounts[1]});
//		const boolAR3jhn = await DipexddFBcxx.approveAndCall.call(addressKWZjQxd, uintN0TXKiK, {from: accounts[2]});
//		const boolrqNfMtb = await DipexddFBcxx.approve.call(addressyLzIdWu, uintGTQ52CL, {from: accounts[0]});
//		const boolOBceKY = await DipexddFBcxx.transferFrom.call(addresse2RDdw, addressgH81se7, uintJQNzW1p, {from: accounts[1]});

		await expect(DipexddFBcxx.transferFrom.call(addressSee2o92, addressLqvHmuQ, uinteyi0SrU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringT8n6FOI = "EaV3ysiFljQueIMVIOYhcEk6CEri"
		const stringrIU2TGb = "VXRqOsg3rKz6lVk33sXBnMCsvudGOUJN983HDpQ4lDGdVyq17x"
		const uintFmdRIv = BigInt("1379")
		const DipexC7cpBg = await Dipex.new(stringT8n6FOI, stringrIU2TGb, uintFmdRIv, {from: accounts[0]});
		const addressDnAl9k8 = "0x0000000000000000000000000000000000000001"
		const uintJD3fama = BigInt("941")
		const addresszYRW9iV = accounts[3]
		const uintRjPdeUc = BigInt("1616")
		const addressgZgGIMa = accounts[3]
		const addresstoO9I5Y = "0x0000000000000000000000000000000000000001"
		const uintu2f1Gw2 = BigInt("1650")
		const addressvfvNTTz = accounts[2]
		const addressBQfkjBl = accounts[4]
		const uintJFDgVIX = BigInt("1938")
		const addressP7YlkQ1 = accounts[0]
//		const boolaWlferS = await DipexC7cpBg.transferownership.call(addressDnAl9k8, {from: accounts[1]});
//		const booljzZiUA8 = await DipexC7cpBg.approve.call(addresszYRW9iV, uintJD3fama, {from: accounts[1]});
//		const boolprlKN4 = await DipexC7cpBg.transferFrom.call(addresstoO9I5Y, addressgZgGIMa, uintRjPdeUc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZiJrNOy = await DipexC7cpBg.transferFrom.call(addressBQfkjBl, addressvfvNTTz, uintu2f1Gw2, {from: accounts[3]});
//		const boolXqK3ypJ = await DipexC7cpBg.approveAndCall.call(addressP7YlkQ1, uintJFDgVIX, {from: accounts[4]});

		await expect(DipexC7cpBg.transferownership.call(addressDnAl9k8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringkCHJC51 = "raOzcWKui7WJTw93Tx7lPcr"
		const stringB7KgOqB = "VSKKuO0UYxfJB1QVbNhUw4yRcn4UFZPoTwcirgOV3rD5cprKB1qbCnvH3HcA5sFNp1R"
		const uintUUcRV3H = BigInt("860")
		const DipexSSWejKD = await Dipex.new(stringkCHJC51, stringB7KgOqB, uintUUcRV3H, {from: accounts[3]});
		const uintJm7PIhX = BigInt("1179")
		const addressTNCChco = accounts[4]
		const uintm2FtIng = BigInt("271")
		const addresst5aUiHw = accounts[4]
		const uintUrpasTZ = BigInt("381")
		const addressWrMD7Sz = accounts[0]
		const addressJjcwn6q = accounts[2]
		const uintRpq2ZOK = BigInt("515")
		const addressfZVyb76 = accounts[4]
		const addresssLeunvY = accounts[4]
		const boolZsRSNUF = await DipexSSWejKD.approve.call(addressTNCChco, uintJm7PIhX, {from: accounts[3]});
		const bool3GGIfm = await DipexSSWejKD.approve.call(addresst5aUiHw, uintm2FtIng, {from: accounts[2]});
//		const boolxPJe3L = await DipexSSWejKD.transferFrom.call(addressJjcwn6q, addressWrMD7Sz, uintUrpasTZ, {from: accounts[0]});
//		const boolegUAjSw = await DipexSSWejKD.transferFrom.call(addresssLeunvY, addressfZVyb76, uintRpq2ZOK, {from: accounts[2]});

		assert.equal(bool3GGIfm, true)
		assert.equal(boolZsRSNUF, true)
		await expect(DipexSSWejKD.transferFrom.call(addressJjcwn6q, addressWrMD7Sz, uintUrpasTZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringwRFV98C = "MT90zBxxuzbImnXvBdswSE6mkNPbzzly9rogyQWrGi42D5vTh6Skm4R"
		const stringw7OdIdy = "hjgWKwRjIyGJ6J6DH2x5NgSUYJD2BsAyYudMGKtVrRabarAKYMxxgwtgSpGc4Q3q11VH5M"
		const uintXUf4yB0 = BigInt("1355")
		const Dipex5cex6s = await Dipex.new(stringwRFV98C, stringw7OdIdy, uintXUf4yB0, {from: "0x0000000000000000000000000000000000000001"});
		const uintGX5w621 = BigInt("1744")
		const addressB2CIGyC = accounts[2]
		const uintHivXWoD = BigInt("210")
		const addressVLPHgAM = accounts[0]
		const uintaz8wrqi = BigInt("1451")
		const addressKuzOKIZ = accounts[2]
		const boolUFyrcrx = await Dipex5cex6s.approve.call(addressB2CIGyC, uintGX5w621, {from: accounts[2]});
		const boollNyBA7S = await Dipex5cex6s.approve.call(addressVLPHgAM, uintHivXWoD, {from: accounts[5]});
		const boolHEZb8u = await Dipex5cex6s.approveAndCall.call(addressKuzOKIZ, uintaz8wrqi, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringDyPp0Ts = "YfptcXBejWDvsSAbjoi1Cdx0sETwvvz8vWw"
		const stringF3xxO8E = "1uzbCi6RAAng1hA23wBRrOXf9ewg5ymuaemsf9en54lTCU"
		const uintfVMk7GB = BigInt("2042")
		const Dipexl2LcgI0 = await Dipex.new(stringDyPp0Ts, stringF3xxO8E, uintfVMk7GB, {from: accounts[1]});
		const uintwVVSqIF = BigInt("1978")
		const addressoMPkRu = accounts[2]
		const uintf04QiMG = BigInt("692")
		const addressyCqqOhI = accounts[5]
		const uintW79UdxS = BigInt("410")
		const addressrlc6tq = accounts[3]
		const uintVVbSCo = BigInt("1156")
		const addresshN51Clt = accounts[6]
		const addressH8Qgxtr = accounts[4]
		const uintQoWQOQ = BigInt("1048")
		const addressB3U9ew = accounts[2]
		const uint2cfFLK = BigInt("76")
		const addressprWmyiL = accounts[1]
		const uintdjHVomY = BigInt("1151")
		const addressAYcUXOD = "0x0000000000000000000000000000000000000001"
		const uintTaQqp9V = BigInt("31")
		const addressFiw04rP = accounts[0]
		const addressYIO3Ps = "0x0000000000000000000000000000000000000001"
		const booldepPvhG = await Dipexl2LcgI0.approve.call(addressoMPkRu, uintwVVSqIF, {from: accounts[4]});
//		const boolnkyq40z = await Dipexl2LcgI0.transfer.call(addressyCqqOhI, uintf04QiMG, {from: accounts[3]});
//		const boolKnRtUZu = await Dipexl2LcgI0.approveAndCall.call(addressrlc6tq, uintW79UdxS, {from: accounts[1]});
//		const boolSXrl4sH = await Dipexl2LcgI0.transferFrom.call(addressH8Qgxtr, addresshN51Clt, uintVVbSCo, {from: accounts[3]});
//		const boolzDPE2Gm = await Dipexl2LcgI0.approve.call(addressB3U9ew, uintQoWQOQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKSeuyEU = await Dipexl2LcgI0.approveAndCall.call(addressprWmyiL, uint2cfFLK, {from: accounts[1]});
//		const boolPVfsIj7 = await Dipexl2LcgI0.transfer.call(addressAYcUXOD, uintdjHVomY, {from: accounts[0]});
//		const boolJpAKXo4 = await Dipexl2LcgI0.approve.call(addressFiw04rP, uintTaQqp9V, {from: accounts[1]});
//		const boolrSsrnCf = await Dipexl2LcgI0.transferownership.call(addressYIO3Ps, {from: accounts[4]});

		assert.equal(booldepPvhG, true)
		await expect(Dipexl2LcgI0.transfer.call(addressyCqqOhI, uintf04QiMG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringkCHJC51 = "raOzcWKui7WJTw93Tx7lPcr"
		const stringB7KgOqB = "VSKKuO0UYxfJB1QVbNhUw4yRcn4UFZPoTwcirgOV3rD5cprKB1qbCnvH3HcA5sFNp1R"
		const uintVsUqaV9 = BigInt("860")
		const DipexSSWejKD = await Dipex.new(stringkCHJC51, stringB7KgOqB, uintVsUqaV9, {from: accounts[3]});
		const uintxVFJ6RD = BigInt("1522")
		const addressqVx8Dkn = accounts[3]
		const uintNkBOQ7R = BigInt("381")
		const addresswHrKVxC = accounts[0]
		const addressoqZVaQt = accounts[3]
		const uintT2nhMX8 = BigInt("1143")
		const addressZMTa1oh = accounts[1]
		const addressJ8SBbNX = accounts[3]
//		const boolFOFHurs = await DipexSSWejKD.transfer.call(addressqVx8Dkn, uintxVFJ6RD, {from: accounts[4]});
//		const boolxPJe3L = await DipexSSWejKD.transferFrom.call(addressoqZVaQt, addresswHrKVxC, uintNkBOQ7R, {from: accounts[0]});
//		const boolE4PxoUO = await DipexSSWejKD.transferFrom.call(addressJ8SBbNX, addressZMTa1oh, uintT2nhMX8, {from: accounts[2]});

		await expect(DipexSSWejKD.transfer.call(addressqVx8Dkn, uintxVFJ6RD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringPwSex9i = "xE"
		const stringwy5PBNi = "JxI8YEquHDnf2gg"
		const uintqaT5P0v = BigInt("1847")
		const DipexNZTnHhu = await Dipex.new(stringPwSex9i, stringwy5PBNi, uintqaT5P0v, {from: accounts[1]});
		const uintKTmzoNj = BigInt("1027")
		const addressjw1Nh17 = accounts[4]
		const addressjAsVecE = accounts[1]
		const uintuvDcIJ = BigInt("269")
		const addressi3fj5yQ = accounts[5]
		const uintFApWoA4 = BigInt("1719")
		const addressZnoao31 = "0x00000000000000000000000000000000000000-1"
		const uintEW9mov3 = BigInt("1793")
		const addressnZktGQn = accounts[5]
		const uintwIifHhC = BigInt("1968")
		const address4d1sEi = accounts[3]
		const uintSZSROMW = BigInt("2036")
		const addressUFwfwVB = accounts[4]
		const uintLyZZhn4 = BigInt("680")
		const addressWrRfmi = accounts[2]
		const boollCsVCRs = await DipexNZTnHhu.transferFrom.call(addressjAsVecE, addressjw1Nh17, uintKTmzoNj, {from: accounts[1]});
		const boolJBznMCV = await DipexNZTnHhu.approveAndCall.call(addressi3fj5yQ, uintuvDcIJ, {from: accounts[1]});
//		const boolTVQJVPy = await DipexNZTnHhu.transfer.call(addressZnoao31, uintFApWoA4, {from: accounts[0]});
//		const boolfsjWmov = await DipexNZTnHhu.approve.call(addressnZktGQn, uintEW9mov3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolV5HGWpU = await DipexNZTnHhu.approve.call(address4d1sEi, uintwIifHhC, {from: accounts[3]});
//		const boolCxYbflC = await DipexNZTnHhu.approveAndCall.call(addressUFwfwVB, uintSZSROMW, {from: accounts[4]});
//		const boolD7usvsr = await DipexNZTnHhu.approveAndCall.call(addressWrRfmi, uintLyZZhn4, {from: accounts[3]});

		assert.equal(boolJBznMCV, true)
		assert.equal(boollCsVCRs, true)
		await expect(DipexNZTnHhu.transfer.call(addressZnoao31, uintFApWoA4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringDyPp0Ts = "YfptcXBejWDvsSAbjoi1Cdx0sETwvvz8vWw"
		const stringF3xxO8E = "1uzbCi6RAAng1hA23wBRrOXf9ewg5ymuaemsf9en54lTCU"
		const uintQxfpKJf = BigInt("2042")
		const Dipexl2LcgI0 = await Dipex.new(stringDyPp0Ts, stringF3xxO8E, uintQxfpKJf, {from: accounts[1]});
		const uintPFstee = BigInt("48")
		const addressMXfOlir = accounts[2]
		const uintJmnlDTk = BigInt("0")
		const addressHs2NydW = accounts[2]
		const addressA3n4dbU = accounts[4]
		const uintspbvAki = BigInt("795")
		const address5xVGls = accounts[2]
		const uintQ9F4cUd = BigInt("637")
		const addressciQZrxI = accounts[0]
		const uintMDiAwom = BigInt("52")
		const addressmbxiBz1 = "0x0000000000000000000000000000000000000001"
		const addressuliqlM = accounts[1]
		const uintqTCNWEZ = BigInt("1289")
		const addressavqXKJ6 = accounts[2]
		const addressr2hTKX = "0x0000000000000000000000000000000000000001"
		const addressqm1EKDK = accounts[6]
		const boolKSeuyEU = await Dipexl2LcgI0.approveAndCall.call(addressMXfOlir, uintPFstee, {from: accounts[1]});
		const boolaS91ee3 = await Dipexl2LcgI0.transferFrom.call(addressA3n4dbU, addressHs2NydW, uintJmnlDTk, {from: accounts[0]});
		const boolYtsEkrF = await Dipexl2LcgI0.approve.call(address5xVGls, uintspbvAki, {from: accounts[3]});
//		const boolPJO366M = await Dipexl2LcgI0.approveAndCall.call(addressciQZrxI, uintQ9F4cUd, {from: accounts[5]});
//		const boolvVvIjOh = await Dipexl2LcgI0.transferFrom.call(addressuliqlM, addressmbxiBz1, uintMDiAwom, {from: accounts[2]});
//		const boolCU4GRh = await Dipexl2LcgI0.approve.call(addressavqXKJ6, uintqTCNWEZ, {from: accounts[1]});
//		const boolrSsrnCf = await Dipexl2LcgI0.transferownership.call(addressr2hTKX, {from: accounts[4]});
//		const boolObkxYWo = await Dipexl2LcgI0.transferownership.call(addressqm1EKDK, {from: accounts[0]});

		assert.equal(boolKSeuyEU, true)
		assert.equal(boolYtsEkrF, true)
		assert.equal(boolaS91ee3, true)
		await expect(Dipexl2LcgI0.approveAndCall.call(addressciQZrxI, uintQ9F4cUd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringDyPp0Ts = "YfptcXBejWDvsSAbjoi1Cdx0sETwvvz8vWw"
		const stringF3xxO8E = "1uzbCi6RAAng1hA23wBRrOXf9ewg5ymuaemsf9en54lTCU"
		const uintgh6CHaX = BigInt("2042")
		const Dipexl2LcgI0 = await Dipex.new(stringDyPp0Ts, stringF3xxO8E, uintgh6CHaX, {from: accounts[1]});
		const uinthw16ZZH = BigInt("195")
		const addressmpQIpPL = accounts[3]
		const addressYIsIadO = accounts[2]
		const uintOWt3TwC = BigInt("0")
		const addressCKtXeL1 = accounts[2]
		const uintzLDeIPX = BigInt("1717")
		const address1WLFZ6 = "0x0000000000000000000000000000000000000001"
		const boolfHGQCdn = await Dipexl2LcgI0.approve.call(addressmpQIpPL, uinthw16ZZH, {from: accounts[5]});
		const boolwmZZHkW = await Dipexl2LcgI0.transferownership.call(addressYIsIadO, {from: accounts[1]});
		const boolKSeuyEU = await Dipexl2LcgI0.approveAndCall.call(addressCKtXeL1, uintOWt3TwC, {from: accounts[1]});
		const booly21WiJJ = await Dipexl2LcgI0.approveAndCall.call(address1WLFZ6, uintzLDeIPX, {from: accounts[1]});

		assert.equal(boolKSeuyEU, true)
		assert.equal(boolfHGQCdn, true)
		assert.equal(boolwmZZHkW, true)
		assert.equal(booly21WiJJ, true)
	});
})