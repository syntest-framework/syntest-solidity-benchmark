const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringaEET8cc = "tmvxMeqsWYLVav7fSDq0GyPSfpMjtVZAApLx6URvBUXLI5HC3"
		const stringwS3F0Ba = "EfOIA6elOmtdgvGzXTJmlWyvOicx"
		const uintOQRavZd = BigInt("1892")
		const WheatFarmKszBfHD = await WheatFarm.new(stringaEET8cc, stringwS3F0Ba, uintOQRavZd, {from: accounts[2]});
		const uinti02v9zL = BigInt("635")
		const addressjlAmSQ7 = accounts[3]
		const addressUurEmjD = accounts[3]
		const uintkzyLIyK = BigInt("82")
		const addressIzD6lPK = accounts[3]
		const boolQBSzwwJ = await WheatFarmKszBfHD.transferFrom.call(addressUurEmjD, addressjlAmSQ7, uinti02v9zL, {from: accounts[4]});
		const boolDhWEV66 = await WheatFarmKszBfHD.approve.call(addressIzD6lPK, uintkzyLIyK, {from: accounts[5]});

		await expect(WheatFarmKszBfHD.transferFrom.call(addressUurEmjD, addressjlAmSQ7, uinti02v9zL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCs5A77e = "JYQNjy3E40YybFBOw2"
		const stringDSW5wdO = "6HfHADlizHvZ9zz1j9b6fRs5HzbMzm7DqDd"
		const uintZ5TckzX = BigInt("93")
		const WheatFarmZn9nnlV = await WheatFarm.new(stringCs5A77e, stringDSW5wdO, uintZ5TckzX, {from: accounts[2]});
		const uintkwUqnpk = BigInt("1047")
		const addressDdLnA7l = accounts[3]
		const addressADudq0E = "0x0000000000000000000000000000000000000001"
		const addressuEtG8h7 = accounts[2]
		const boolxUACNb = await WheatFarmZn9nnlV.approve.call(addressDdLnA7l, uintkwUqnpk, {from: accounts[2]});
		const uintv8rsH4k = await WheatFarmZn9nnlV.allowance.call(addressuEtG8h7, addressADudq0E, {from: accounts[2]});

		assert.equal(boolxUACNb, true)
		assert.equal(uintv8rsH4k, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringVqeSn2o = "TGDUdQ4etFvGt6GvGORvU7W7D6vrFDOBtmP3YgzPHefQfahzudrv"
		const stringH8UMFz = "C4cBddHY3p8YrjjjhkmxcHbrgO0VVv3jZTskhx7PLXmmldYJTn3zjuHegMWesBJWgfFlP3mToVbbmlsMGiJCC2AXDL2"
		const uintF3ao7T0 = BigInt("5")
		const WheatFarmlVH4ga8 = await WheatFarm.new(stringVqeSn2o, stringH8UMFz, uintF3ao7T0, {from: accounts[5]});
		const uintAZYzVwv = BigInt("1550")
		const addresseSpx0uy = "0x0000000000000000000000000000000000000001"
		const uintrZXUMu = BigInt("36")
		const addressnsBZOny = "0x0000000000000000000000000000000000000001"
		const addressyzjBUA5 = accounts[2]
		const boolNBhWNbE = await WheatFarmlVH4ga8.approveAndCall.call(addresseSpx0uy, uintAZYzVwv, {from: accounts[0]});
		const boolk53bpVg = await WheatFarmlVH4ga8.approve.call(addressnsBZOny, uintrZXUMu, {from: accounts[4]});
		const boolSkiVvLq = await WheatFarmlVH4ga8.transferownership.call(addressyzjBUA5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmlVH4ga8.approveAndCall.call(addresseSpx0uy, uintAZYzVwv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringRt8PF3P = "NZc2i4Y3qDtI1Dkdsy2jUcGPtzq7SGcDTbu4iWSHadSYFyctGInD9ulXOkZ"
		const stringW4eTCK = "D"
		const uintnw1tbuP = BigInt("1910")
		const WheatFarmn2l9AP = await WheatFarm.new(stringRt8PF3P, stringW4eTCK, uintnw1tbuP, {from: "0x0000000000000000000000000000000000000001"});
		const uintxWTOXOQ = BigInt("103")
		const addressz4r4wGx = accounts[0]
		const uintVLAAK9V = BigInt("103")
		const addresspqdnuLf = accounts[1]
		const addressKT5VbVT = accounts[5]
		const uintYKlczMD = BigInt("2042")
		const addressTwHMCwb = accounts[4]
		const uinttA59to7 = BigInt("497")
		const addressb1ky8dA = accounts[1]
		const addressg8neIWS = accounts[4]
		const boolnjsp7P = await WheatFarmn2l9AP.approve.call(addressz4r4wGx, uintxWTOXOQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolUGxe1JE = await WheatFarmn2l9AP.increaseAllowance.call(addresspqdnuLf, uintVLAAK9V, {from: accounts[0]});
		const boolOCWrYd3 = await WheatFarmn2l9AP.transferownership.call(addressKT5VbVT, {from: "0x0000000000000000000000000000000000000001"});
		const boolXiZSNJ = await WheatFarmn2l9AP.increaseAllowance.call(addressTwHMCwb, uintYKlczMD, {from: accounts[3]});
		const boolXSja8WI = await WheatFarmn2l9AP.approveAndCall.call(addressb1ky8dA, uinttA59to7, {from: accounts[4]});
		const boolA4kZ5P = await WheatFarmn2l9AP.transferownership.call(addressg8neIWS, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringyUBYbRi = "35b2h8UgzAzGwUluzWmg34GuPHy4SUiL6wiaK2z91ao58"
		const stringsk1TKTr = "BoZbuFsG6C3VCc4ENmab4UdCfaphv6Ny7RDWAld7gmU"
		const uintwJrHHbu = BigInt("218")
		const WheatFarmvlj5vdd = await WheatFarm.new(stringyUBYbRi, stringsk1TKTr, uintwJrHHbu, {from: accounts[3]});
		const uintxDCGkht = BigInt("32")
		const addressTDE0pA6 = accounts[0]
		const uintYIc0Tci = BigInt("1264")
		const addressWwl1sLz = accounts[1]
		const addressas3mDNe = accounts[3]
		const boolsnijCE = await WheatFarmvlj5vdd.transfer.call(addressTDE0pA6, uintxDCGkht, {from: accounts[1]});
		const stringxIjvWuj = await WheatFarmvlj5vdd.symbol.call({from: accounts[2]});
		const boolCycjbI = await WheatFarmvlj5vdd.transferFrom.call(addressas3mDNe, addressWwl1sLz, uintYIc0Tci, {from: accounts[1]});
		const stringGpCFZX = await WheatFarmvlj5vdd.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WheatFarmvlj5vdd.transfer.call(addressTDE0pA6, uintxDCGkht, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringLfDn6nX = "1L1sAx4GtrV0LCqBoQtiAnFNSy54EkgXyLhIQtVlQUiwiIiBXlc5vHJBiD9jytntpRAxg04Jv07OCnw"
		const stringNZ6JxU3 = "VQ0wGTXKzmsarFIA4S5wLX6IsvjPsF4u"
		const uintbVfdtnr = BigInt("708")
		const WheatFarmd4zovt = await WheatFarm.new(stringLfDn6nX, stringNZ6JxU3, uintbVfdtnr, {from: accounts[3]});
		const uintBsCO2yr = BigInt("563")
		const addressOTfqGS = accounts[4]
		const uintDQh1a0n = BigInt("717")
		const addressMbSI2c5 = accounts[3]
		const addressgaKGlUh = accounts[0]
		const addressrkbidIo = accounts[1]
		const stringXhdOaGA = await WheatFarmd4zovt.name.call({from: accounts[2]});
		const boolotgOnAN = await WheatFarmd4zovt.increaseAllowance.call(addressOTfqGS, uintBsCO2yr, {from: accounts[2]});
		const boola6zMgaJ = await WheatFarmd4zovt.approveAndCall.call(addressMbSI2c5, uintDQh1a0n, {from: accounts[1]});
		const stringNu8CoMH = await WheatFarmd4zovt.name.call({from: accounts[5]});
		const uintMauKjh = await WheatFarmd4zovt.allowance.call(addressrkbidIo, addressgaKGlUh, {from: accounts[3]});

		assert.equal(stringXhdOaGA, "1L1sAx4GtrV0LCqBoQtiAnFNSy54EkgXyLhIQtVlQUiwiIiBXlc5vHJBiD9jytntpRAxg04Jv07OCnw")
		await expect(WheatFarmd4zovt.increaseAllowance.call(addressOTfqGS, uintBsCO2yr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringbtucPEb = "EJ8zPK9Qechw1JQQWd3wugRIWNZd7HzFCHJZ5KApAr3sW2Xi"
		const stringZcAZ378 = "iSWQd0NIiRcnl2qr65YKG1f1DE9koZwtSpH5myMgQILVMQI8m"
		const uintPqty59c = BigInt("1285")
		const WheatFarmIXXNFKz = await WheatFarm.new(stringbtucPEb, stringZcAZ378, uintPqty59c, {from: accounts[0]});
		const addresshaeTVaj = accounts[1]
		const uintJ5SJWvZ = BigInt("711")
		const addresspCml3LH = accounts[2]
		const addressX0y4Otu = accounts[2]
		const uintE5J7UnG = BigInt("1704")
		const addresshDvQg8d = accounts[0]
		const addressIG8Rw0 = accounts[0]
		const addressbwyc6nQ = accounts[2]
		const uintlxaxIyQ = BigInt("1308")
		const addressDAmakrQ = accounts[1]
		const uint8Ww0LxgY = await WheatFarmIXXNFKz.decimals.call({from: accounts[4]});
		const boolwlVKgLd = await WheatFarmIXXNFKz.transferownership.call(addresshaeTVaj, {from: accounts[3]});
		const boolJvrMRrN = await WheatFarmIXXNFKz.transferFrom.call(addressX0y4Otu, addresspCml3LH, uintJ5SJWvZ, {from: accounts[1]});
		const booluXCN28u = await WheatFarmIXXNFKz.transfer.call(addresshDvQg8d, uintE5J7UnG, {from: accounts[4]});
		const uintY8Rzed4 = await WheatFarmIXXNFKz.totalSupply.call({from: accounts[3]});
		const uintTZiQsAk = await WheatFarmIXXNFKz.allowance.call(addressbwyc6nQ, addressIG8Rw0, {from: accounts[5]});
		const booltTtDkXG = await WheatFarmIXXNFKz.approve.call(addressDAmakrQ, uintlxaxIyQ, {from: accounts[0]});

		assert.equal(uint8Ww0LxgY, BigInt("18"))
		await expect(WheatFarmIXXNFKz.transferownership.call(addresshaeTVaj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVqeSn2o = "TGDUdQ4etFvGt6GvGORvU7W7D6vrFDOBtmP3YgzPHefQfahzudrv"
		const stringH8UMFz = "C4cBddHY3p8YrjjjhkmxcHbrgO0VVv3jZTskhx7PLXmmldYJTn3zjuHegMWesBJWgfFlP3mToVbbmlsMGiJCC2AXDL2"
		const uinti4DdlSE = BigInt("5")
		const WheatFarmlVH4ga8 = await WheatFarm.new(stringVqeSn2o, stringH8UMFz, uinti4DdlSE, {from: accounts[5]});
		const addressZjJLcqp = accounts[5]
		const uintoTAulmR = BigInt("1550")
		const addresszvHdpeJ = "0x00000000000000000000000000000000000000-1"
		const uintREDayKq = BigInt("1063")
		const addressEPri7rR = accounts[2]
		const addresshByeX7o = accounts[1]
		const addressZZpQGtp = "0x0000000000000000000000000000000000000001"
		const addressPudHSDr = accounts[1]
		const uintFdziRI = BigInt("1060")
		const address7AwMbL = accounts[5]
		const addressIYmexvo = accounts[1]
		const uintqt94stp = BigInt("877")
		const addresskVKug4l = accounts[4]
		const uint8iwyJl9D = await WheatFarmlVH4ga8.decimals.call({from: accounts[1]});
		const uintDmoVZs = await WheatFarmlVH4ga8.balanceOf.call(addressZjJLcqp, {from: accounts[3]});
		const boolNBhWNbE = await WheatFarmlVH4ga8.approveAndCall.call(addresszvHdpeJ, uintoTAulmR, {from: accounts[0]});
		const boolIJokIuk = await WheatFarmlVH4ga8.transferFrom.call(addresshByeX7o, addressEPri7rR, uintREDayKq, {from: accounts[4]});
		const uintuJ9vGO4 = await WheatFarmlVH4ga8.allowance.call(addressPudHSDr, addressZZpQGtp, {from: accounts[2]});
		const boolcug4mGx = await WheatFarmlVH4ga8.transferFrom.call(addressIYmexvo, address7AwMbL, uintFdziRI, {from: accounts[4]});
		const booljVGVkvi = await WheatFarmlVH4ga8.increaseAllowance.call(addresskVKug4l, uintqt94stp, {from: accounts[1]});

		assert.equal(uint8iwyJl9D, BigInt("18"))
		assert.equal(uintDmoVZs, BigInt("5000000000000000000"))
		await expect(WheatFarmlVH4ga8.approveAndCall.call(addresszvHdpeJ, uintoTAulmR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVqeSn2o = "TGDUdQ4etFvGt6GvGORvU7W7D6vrFDOBtmP3YgzPHefQfahzudrv"
		const stringH8UMFz = "C4cBddHY3p8YrjjjhkmxcHbrgO0VVv3jZTskhx7PLXmmldYJTn3zjuHegMWesBJWgfFlP3mToVbbmlsMGiJCC2AXDL2"
		const uintkn6ViYI = BigInt("5")
		const WheatFarmlVH4ga8 = await WheatFarm.new(stringVqeSn2o, stringH8UMFz, uintkn6ViYI, {from: accounts[5]});
		const addressmBrRX9S = accounts[5]
		const uintxAhr20Q = BigInt("829")
		const addressPUyyQFx = accounts[5]
		const uintNdOjrUu = BigInt("995")
		const addresse2aiJuC = accounts[1]
		const uintVFqdXAy = BigInt("1550")
		const addressImegNuA = "0x0000000000000000000000000000000000000000"
		const addressGvtJ7el = accounts[2]
		const uint8iwyJl9D = await WheatFarmlVH4ga8.decimals.call({from: accounts[1]});
		const uintDmoVZs = await WheatFarmlVH4ga8.balanceOf.call(addressmBrRX9S, {from: accounts[3]});
		const boolUYlwIF7 = await WheatFarmlVH4ga8.transfer.call(addressPUyyQFx, uintxAhr20Q, {from: accounts[1]});
		const booltvOaudt = await WheatFarmlVH4ga8.transfer.call(addresse2aiJuC, uintNdOjrUu, {from: "0x0000000000000000000000000000000000000001"});
		const boolNBhWNbE = await WheatFarmlVH4ga8.approveAndCall.call(addressImegNuA, uintVFqdXAy, {from: accounts[0]});
		const boolVB9ismg = await WheatFarmlVH4ga8.transferownership.call(addressGvtJ7el, {from: accounts[4]});

		assert.equal(uint8iwyJl9D, BigInt("18"))
		assert.equal(uintDmoVZs, BigInt("5000000000000000000"))
		await expect(WheatFarmlVH4ga8.transfer.call(addressPUyyQFx, uintxAhr20Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringyUBYbRi = "35b2h8UgzAzGwUluzWmg34GuPHy4SUiL6wiaK2z91ao58"
		const stringsk1TKTr = "BoZbuFsG6C3VCc4ENmab4UdCfaphv6Ny7RDWAld7gmU"
		const uintx9KPCHd = BigInt("218")
		const WheatFarmvlj5vdd = await WheatFarm.new(stringyUBYbRi, stringsk1TKTr, uintx9KPCHd, {from: accounts[3]});
		const uintSn8zjnl = BigInt("0")
		const addressYfnL9Tq = accounts[0]
		const uintoJUAUnJ = BigInt("1823")
		const addresswoo5qBL = accounts[3]
		const uintb8UQHNW = BigInt("197")
		const addressJ99xcnH = accounts[1]
		const boolsnijCE = await WheatFarmvlj5vdd.transfer.call(addressYfnL9Tq, uintSn8zjnl, {from: accounts[1]});
		const boolxaZfSpJ = await WheatFarmvlj5vdd.increaseAllowance.call(addresswoo5qBL, uintoJUAUnJ, {from: accounts[1]});
		const boolQXPUD3o = await WheatFarmvlj5vdd.approve.call(addressJ99xcnH, uintb8UQHNW, {from: "0x0000000000000000000000000000000000000001"});
		const stringGpCFZX = await WheatFarmvlj5vdd.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsnijCE, true)
		await expect(WheatFarmvlj5vdd.increaseAllowance.call(addresswoo5qBL, uintoJUAUnJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwGmq8gS = "bhYIhefbPwS1Lj71t6HEPcJvaghlosJvgRXuXUojOfcO0Ghp4w5OxjKOEVlo92gIzFPqULfP1AeR1ypviPDvW4weCagB4"
		const stringyTjOAg2 = "IiG1G9Y6cPmATnHdCNl"
		const uintGlMd1zZ = BigInt("1635")
		const WheatFarmqwHZqmh = await WheatFarm.new(stringwGmq8gS, stringyTjOAg2, uintGlMd1zZ, {from: accounts[1]});
		const uintvL5TmbW = BigInt("1917")
		const addressgvhceZu = accounts[4]
		const uintj6SM4F = BigInt("915")
		const addressJPNB1lR = "0x0000000000000000000000000000000000000001"
		const addressM6BqT68 = accounts[1]
		const boolpf7ar6B = await WheatFarmqwHZqmh.approveAndCall.call(addressgvhceZu, uintvL5TmbW, {from: accounts[1]});
		const stringUFUU2is = await WheatFarmqwHZqmh.name.call({from: accounts[0]});
		const boolJDZTnht = await WheatFarmqwHZqmh.transferFrom.call(addressM6BqT68, addressJPNB1lR, uintj6SM4F, {from: accounts[3]});
		const uint8xIDckxV = await WheatFarmqwHZqmh.decimals.call({from: accounts[4]});

		assert.equal(boolpf7ar6B, true)
		assert.equal(stringUFUU2is, "bhYIhefbPwS1Lj71t6HEPcJvaghlosJvgRXuXUojOfcO0Ghp4w5OxjKOEVlo92gIzFPqULfP1AeR1ypviPDvW4weCagB4")
		await expect(WheatFarmqwHZqmh.transferFrom.call(addressM6BqT68, addressJPNB1lR, uintj6SM4F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwGmq8gS = "bhYIhefbPwS1Lj71t6HEPcJvaghlosJvgRXuXUojOfcO0Ghp4w5OxjKOEVlo92gIzFPqULfP1AeR1ypviPDvW4weCagB4"
		const stringyTjOAg2 = "IiG1G9Y6cPmATnHdCNl"
		const uintvSxflMn = BigInt("1635")
		const WheatFarmqwHZqmh = await WheatFarm.new(stringwGmq8gS, stringyTjOAg2, uintvSxflMn, {from: accounts[1]});
		const uintyHfIKqZ = BigInt("0")
		const addressNNEz7OB = accounts[4]
		const uintO1Hk9ps = BigInt("1931")
		const address0G0uZ1 = accounts[4]
		const uinto1EEDk2 = BigInt("1832")
		const addressZJDwkgH = accounts[2]
		const boolpf7ar6B = await WheatFarmqwHZqmh.approveAndCall.call(addressNNEz7OB, uintyHfIKqZ, {from: accounts[1]});
		const boolTII7GKk = await WheatFarmqwHZqmh.increaseAllowance.call(address0G0uZ1, uintO1Hk9ps, {from: accounts[5]});
		const boolBHbbH0W = await WheatFarmqwHZqmh.approveAndCall.call(addressZJDwkgH, uinto1EEDk2, {from: "0x0000000000000000000000000000000000000001"});
		const uint8xIDckxV = await WheatFarmqwHZqmh.decimals.call({from: accounts[4]});

		assert.equal(boolpf7ar6B, true)
		await expect(WheatFarmqwHZqmh.increaseAllowance.call(address0G0uZ1, uintO1Hk9ps, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})