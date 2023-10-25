const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringgG1g1UL = "3jNdMfgY0LdS29WY9yzR97k8QaJlXF4oI"
		const stringjAHqXDa = "VJWMUxf6iASDihZqNcOH3Y9gas20idQpuctdCDPsG41ury1kB5hj6YEwRisJGSlyg2rMx"
		const uintWrWRVrx = BigInt("161")
		const OnXFinanceRazt7i6 = await OnXFinance.new(stringgG1g1UL, stringjAHqXDa, uintWrWRVrx, {from: accounts[3]});
		const uintfg207lm = BigInt("1615")
		const addresseCmSY5 = accounts[3]
		const uintPbDaOdf = BigInt("678")
		const addressmigwGMn = accounts[4]
		const uintebGhjp = BigInt("40")
		const addressOibfWV5 = accounts[1]
//		const boolHU2pyY = await OnXFinanceRazt7i6.increaseAllowance.call(addresseCmSY5, uintfg207lm, {from: accounts[0]});
//		const booljqtZjRQ = await OnXFinanceRazt7i6.approveAndCall.call(addressmigwGMn, uintPbDaOdf, {from: accounts[2]});
//		const boolcT7guq9 = await OnXFinanceRazt7i6.decreaseAllowance.call(addressOibfWV5, uintebGhjp, {from: accounts[2]});

		await expect(OnXFinanceRazt7i6.increaseAllowance.call(addresseCmSY5, uintfg207lm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringSdnBclT = "xW8iI63gYiyYops7YwUtij"
		const stringqp7H10 = "ipf4xq3UjXNnzgx"
		const uintAbpptWU = BigInt("1622")
		const OnXFinanceF3Vk0P5 = await OnXFinance.new(stringSdnBclT, stringqp7H10, uintAbpptWU, {from: accounts[2]});
		const addressCo0XJbr = accounts[3]
		const uintgCjeE0l = BigInt("1554")
		const addressIIIqBVi = accounts[1]
		const stringETARh6E = await OnXFinanceF3Vk0P5.symbol.call({from: accounts[1]});
		const uintvNYYBY = await OnXFinanceF3Vk0P5.balanceOf.call(addressCo0XJbr, {from: accounts[0]});
//		const boolfL5XW4Y = await OnXFinanceF3Vk0P5.approveAndCall.call(addressIIIqBVi, uintgCjeE0l, {from: accounts[0]});

		assert.equal(stringETARh6E, "ipf4xq3UjXNnzgx")
		assert.equal(uintvNYYBY, BigInt("0"))
		await expect(OnXFinanceF3Vk0P5.approveAndCall.call(addressIIIqBVi, uintgCjeE0l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringagCKg7 = "d1WS4xg7fmPwTjiGXzy5FOiaHDNOQ7gtixBvS9atAGbCTlhKS0"
		const stringBPH32Oc = "aLBo8g5Gb4Ch8xRCcUR"
		const uintnRVhWLv = BigInt("155")
		const OnXFinancewcfg9Wh = await OnXFinance.new(stringagCKg7, stringBPH32Oc, uintnRVhWLv, {from: accounts[5]});
		const addressvDpyOJn = accounts[0]
		const uintBFBelTv = BigInt("1137")
		const addressK1ENx0f = accounts[4]
		const uints1AOo5S = BigInt("1417")
		const addresssv4XhmB = accounts[4]
		const addresslMZKyPn = accounts[0]
		const uintNOOMa5 = BigInt("873")
		const addressCTLzeX1 = "0x0000000000000000000000000000000000000001"
//		const boolyMNwXp = await OnXFinancewcfg9Wh.transferownership.call(addressvDpyOJn, {from: accounts[0]});
//		const boolpOLc6dR = await OnXFinancewcfg9Wh.increaseAllowance.call(addressK1ENx0f, uintBFBelTv, {from: accounts[1]});
//		const boolW3OZ1QJ = await OnXFinancewcfg9Wh.transferFrom.call(addresslMZKyPn, addresssv4XhmB, uints1AOo5S, {from: accounts[0]});
//		const boolwuAXw8Y = await OnXFinancewcfg9Wh.transfer.call(addressCTLzeX1, uintNOOMa5, {from: accounts[2]});
//		const stringSCBTfy7 = await OnXFinancewcfg9Wh.name.call({from: accounts[1]});

		await expect(OnXFinancewcfg9Wh.transferownership.call(addressvDpyOJn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringjFA275 = "3S32cPYWErHPk9O8kaoGOAjGdoNO37y5iyyxfHXWpfKz2Kc"
		const stringCIaGaK2 = "9ctzqdLe5Tp4MWsiO753wwJbj4NYU6y4k1wGhBFsoltT3DPfFhwPjTKS2qfjNBcKpLP8MAJGooUJrbykH"
		const uintW0QhqdJ = BigInt("1830")
		const OnXFinanceaZqXrTv = await OnXFinance.new(stringjFA275, stringCIaGaK2, uintW0QhqdJ, {from: accounts[1]});
		const uintNV7SVzz = BigInt("976")
		const addressiFlV1Kv = accounts[3]
		const uintXAYDlPS = BigInt("694")
		const addressPo2dCki = accounts[0]
		const uintiZsMsqF = BigInt("1948")
		const addressC9FF8at = accounts[4]
//		const boolBW3hgo7 = await OnXFinanceaZqXrTv.transfer.call(addressiFlV1Kv, uintNV7SVzz, {from: accounts[2]});
//		const booluWzBGu4 = await OnXFinanceaZqXrTv.increaseAllowance.call(addressPo2dCki, uintXAYDlPS, {from: accounts[3]});
//		const booluluoHIh = await OnXFinanceaZqXrTv.transfer.call(addressC9FF8at, uintiZsMsqF, {from: accounts[1]});

		await expect(OnXFinanceaZqXrTv.transfer.call(addressiFlV1Kv, uintNV7SVzz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQ2Eqc5z = "kui"
		const stringzGueBng = "aAvJ6"
		const uintxbPNuWG = BigInt("416")
		const OnXFinancezcn2lHb = await OnXFinance.new(stringQ2Eqc5z, stringzGueBng, uintxbPNuWG, {from: accounts[3]});
		const uintsW0kwO = BigInt("161")
		const addressxUPNcHE = accounts[2]
		const addressj0Ce9e = accounts[2]
		const addressVOrYplt = accounts[2]
		const stringO9vfKZ = await OnXFinancezcn2lHb.name.call({from: accounts[3]});
		const boolKVmE3V = await OnXFinancezcn2lHb.approve.call(addressxUPNcHE, uintsW0kwO, {from: accounts[2]});
		const uintoLJZGw = await OnXFinancezcn2lHb.allowance.call(addressVOrYplt, addressj0Ce9e, {from: accounts[4]});

		assert.equal(boolKVmE3V, true)
		assert.equal(stringO9vfKZ, "kui")
		assert.equal(uintoLJZGw, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringRbmAeZr = "5DN39CWX34t5nAWrMA6SbLarpmqMJmGOI4yfPPQuIEnxcOo1Ie1i4BFUfWR3jL4upts7Iyb"
		const stringTaOPYsU = "24V2Tinxzx7I5kX0fYr9NbHshpgZyPW"
		const uintiuthy9K = BigInt("1145")
		const OnXFinancedzFhv7y = await OnXFinance.new(stringRbmAeZr, stringTaOPYsU, uintiuthy9K, {from: accounts[1]});
		const uintRcvHR1R = BigInt("128")
		const addressr6Zs4aO = accounts[5]
		const uintWugtZP6 = BigInt("1186")
		const addressAFoYn8O = accounts[0]
		const uintA8iRrNg = BigInt("1891")
		const addressgl7OyXD = accounts[1]
		const boolaCVwyIV = await OnXFinancedzFhv7y.transfer.call(addressr6Zs4aO, uintRcvHR1R, {from: accounts[1]});
		const boolHZtBIxw = await OnXFinancedzFhv7y.approve.call(addressAFoYn8O, uintWugtZP6, {from: accounts[2]});
		const stringPnbC6g4 = await OnXFinancedzFhv7y.name.call({from: accounts[2]});
//		const boolu32sKLy = await OnXFinancedzFhv7y.increaseAllowance.call(addressgl7OyXD, uintA8iRrNg, {from: "0x0000000000000000000000000000000000000001"});
//		const uintL7VEH5 = await OnXFinancedzFhv7y.totalSupply.call({from: accounts[5]});

		assert.equal(boolHZtBIxw, true)
		assert.equal(boolaCVwyIV, true)
		assert.equal(stringPnbC6g4, "5DN39CWX34t5nAWrMA6SbLarpmqMJmGOI4yfPPQuIEnxcOo1Ie1i4BFUfWR3jL4upts7Iyb")
		await expect(OnXFinancedzFhv7y.increaseAllowance.call(addressgl7OyXD, uintA8iRrNg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringggtJI2a = "eupUGWT07SoY4y3nOrtPdd3UelQyPy834Yg1w8yQmBFTspdvgHmCJxm1SjgEHuY7wfJBlbep"
		const stringG6cNOba = "59oxt6rvui6idPhvPSQPMSTWJ6MjBHcJh8uPWk0daodpiYasWBPKTGxNpiKa66TzP8Os5bmQ"
		const uintGDrwT7O = BigInt("238")
		const OnXFinanceEW7UgJR = await OnXFinance.new(stringggtJI2a, stringG6cNOba, uintGDrwT7O, {from: "0x0000000000000000000000000000000000000001"});
		const uintxWYUb6d = BigInt("854")
		const address5WSid8 = accounts[2]
		const uintQuI7dYo = BigInt("1789")
		const addressE0IgXfb = accounts[0]
		const uint8hE7Cu7M = await OnXFinanceEW7UgJR.decimals.call({from: accounts[4]});
		const boolIDy59nX = await OnXFinanceEW7UgJR.transfer.call(address5WSid8, uintxWYUb6d, {from: accounts[3]});
		const boolOeXBdQd = await OnXFinanceEW7UgJR.decreaseAllowance.call(addressE0IgXfb, uintQuI7dYo, {from: accounts[4]});
		const stringDFVFPp0 = await OnXFinanceEW7UgJR.symbol.call({from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringQ2Eqc5z = "kui"
		const stringzGueBng = "aAvJ6"
		const uinteXOiqGM = BigInt("416")
		const OnXFinancezcn2lHb = await OnXFinance.new(stringQ2Eqc5z, stringzGueBng, uinteXOiqGM, {from: accounts[3]});
		const uintDpPzQv9 = BigInt("1969")
		const addressTxT2lQl = accounts[0]
		const uintEzFXBBv = BigInt("1740")
		const addressI6vIxGI = accounts[5]
		const stringO9vfKZ = await OnXFinancezcn2lHb.name.call({from: accounts[3]});
		const boolLM2uWKg = await OnXFinancezcn2lHb.approveAndCall.call(addressTxT2lQl, uintDpPzQv9, {from: accounts[3]});
//		const boolBkdVAd = await OnXFinancezcn2lHb.decreaseAllowance.call(addressI6vIxGI, uintEzFXBBv, {from: accounts[2]});

		assert.equal(boolLM2uWKg, true)
		assert.equal(stringO9vfKZ, "kui")
		await expect(OnXFinancezcn2lHb.decreaseAllowance.call(addressI6vIxGI, uintEzFXBBv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringQ2Eqc5z = "kui"
		const stringzGueBng = "aAvJ6"
		const uintJ52jDUK = BigInt("416")
		const OnXFinancezcn2lHb = await OnXFinance.new(stringQ2Eqc5z, stringzGueBng, uintJ52jDUK, {from: accounts[3]});
		const uintoeaOHc = BigInt("0")
		const addresscqU15g = accounts[3]
		const addressYzmVa3F = accounts[5]
		const boolaR7rvMd = await OnXFinancezcn2lHb.transferFrom.call(addressYzmVa3F, addresscqU15g, uintoeaOHc, {from: accounts[1]});

		assert.equal(boolaR7rvMd, true)
	});

	it('test for OnXFinance', async () => {
		const stringjFA275 = "3S32cPYWErHPk9O8kaoGOAjGdoNO37y5iyyxfHXWpfKz2Kc"
		const stringCIaGaK2 = "9ctzqdLe5Tp4MWsiO753wwJbj4NYU6y4k1wGhBFsoltT3DPfFhwPjTKS2qfjNBcKpLP8MAJGooUJrbykH"
		const uintb5dXPdf = BigInt("1830")
		const OnXFinanceaZqXrTv = await OnXFinance.new(stringjFA275, stringCIaGaK2, uintb5dXPdf, {from: accounts[1]});
		const uintbmLewVE = BigInt("0")
		const addressURDnFgO = accounts[5]
		const uintDKUX8ec = BigInt("855")
		const addressXQGR7hZ = accounts[0]
		const boolxEAPKOt = await OnXFinanceaZqXrTv.approveAndCall.call(addressURDnFgO, uintbmLewVE, {from: accounts[1]});
//		const boolxXVrkx = await OnXFinanceaZqXrTv.increaseAllowance.call(addressXQGR7hZ, uintDKUX8ec, {from: accounts[4]});

		assert.equal(boolxEAPKOt, true)
		await expect(OnXFinanceaZqXrTv.increaseAllowance.call(addressXQGR7hZ, uintDKUX8ec, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})