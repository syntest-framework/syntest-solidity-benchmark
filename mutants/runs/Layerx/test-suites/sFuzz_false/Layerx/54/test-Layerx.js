const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressUpfDwxY = accounts[5]
		const LayerxIdKmF7b = await Layerx.new(addressUpfDwxY, {from: accounts[2]});
		const uint70KNDg = BigInt("1608")
		const addressVjj1Pme = accounts[1]
		const uintZshMTOS = BigInt("1454")
		const uinta1db5L1 = await LayerxIdKmF7b.exist.call(uint70KNDg, {from: accounts[0]});
		await LayerxIdKmF7b.paused.call({from: accounts[2]});
		const addressPlDA1nl = await LayerxIdKmF7b.setNewStakeCreator.call(addressVjj1Pme, {from: accounts[3]});
		const uintqj0GRJS = await LayerxIdKmF7b.exist.call(uintZshMTOS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxIdKmF7b.exist.call(uint70KNDg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSCXILBB = accounts[1]
		const LayerxJHsG6d = await Layerx.new(addressSCXILBB, {from: accounts[2]});
		const bytegoQeehr = "0x110b140a"
		const uinttfJAAZK = BigInt("195")
		const addressl1WTqU = accounts[4]
		const uintMTJgzQo = BigInt("1152")
		const uintRSvkPOp = BigInt("115")
		const addressHCyaso4 = accounts[5]
		const addressbWmJbr0 = accounts[0]
		const addressk94UVIT = accounts[5]
		const boolWXLezZM = await LayerxJHsG6d.approveAndCall.call(addressl1WTqU, uinttfJAAZK, bytegoQeehr, {from: accounts[4]});
		const uintYCJ7Ics = await LayerxJHsG6d.lock.call(uintMTJgzQo, {from: accounts[2]});
		const boolTd26IAS = await LayerxJHsG6d.transfer.call(addressHCyaso4, uintRSvkPOp, {from: accounts[4]});
		const uintoo8ycB9 = await LayerxJHsG6d.allowance.call(addressk94UVIT, addressbWmJbr0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxJHsG6d.approveAndCall.call(addressl1WTqU, uinttfJAAZK, bytegoQeehr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqj7TMX5 = accounts[1]
		const LayerxD2t9stP = await Layerx.new(addressqj7TMX5, {from: accounts[0]});
		const uintYseZfdR = BigInt("173")
		const addressIWp5fnc = "0x0000000000000000000000000000000000000001"
		const addressOzuMtyI = accounts[0]
		const addressRE4bR0w = accounts[2]
		const booluMMRF69 = await LayerxD2t9stP.transferFrom.call(addressOzuMtyI, addressIWp5fnc, uintYseZfdR, {from: accounts[0]});
		const uintszSuVqX = await LayerxD2t9stP.balanceOf.call(addressRE4bR0w, {from: accounts[0]});

		await expect(LayerxD2t9stP.transferFrom.call(addressOzuMtyI, addressIWp5fnc, uintYseZfdR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressrFBm6HR = accounts[3]
		const LayerxzMZfafW = await Layerx.new(addressrFBm6HR, {from: accounts[2]});
		const uintxsS8E87 = BigInt("7")
		const uintJ9T8oZe = BigInt("114")
		const addresswhpZJ6t = accounts[2]
		const uintdO32go = BigInt("1297")
		const addresshmEreFq = accounts[2]
		const addressSMS1UBN = accounts[3]
		const uintR1MRv4O = BigInt("699")
		const uintN5zEdwO = await LayerxzMZfafW.lock.call(uintxsS8E87, {from: accounts[1]});
		const booldb1Zjkc = await LayerxzMZfafW.approve.call(addresswhpZJ6t, uintJ9T8oZe, {from: accounts[4]});
		const boolSg360KW = await LayerxzMZfafW.transferFrom.call(addressSMS1UBN, addresshmEreFq, uintdO32go, {from: accounts[2]});
		const uintaFY6Gt8 = await LayerxzMZfafW.exist.call(uintR1MRv4O, {from: accounts[4]});

		await expect(LayerxzMZfafW.lock.call(uintxsS8E87, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresseMECcWV = accounts[3]
		const LayerxPuVtexW = await Layerx.new(addresseMECcWV, {from: accounts[2]});
		const addressaqWJ7NB = accounts[3]
		const byteDSIhI33 = "0x081d14060f0217100e091c190a130e1d18140609001d1a13"
		const uintZVrhhJs = BigInt("539")
		const addresswTBE0va = accounts[0]
		const uintPAT5ct = await LayerxPuVtexW.balanceOf.call(addressaqWJ7NB, {from: accounts[1]});
		const uintXZEO1Tm = await LayerxPuVtexW.totalSupply.call({from: accounts[5]});
		await LayerxPuVtexW.addStakePayment.call({from: accounts[1]});
		const boolOQa4Ow7 = await LayerxPuVtexW.approveAndCall.call(addresswTBE0va, uintZVrhhJs, byteDSIhI33, {from: accounts[5]});

		assert.equal(uintPAT5ct, BigInt("40000000000000000000000"))
		assert.equal(uintXZEO1Tm, BigInt("40000000000000000000000"))
		await expect(LayerxPuVtexW.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscK7K83b = accounts[5]
		const LayerxWCV8HzY = await Layerx.new(addresscK7K83b, {from: accounts[2]});
		const uintPdq2oB3 = BigInt("1371")
		const addressgtCM2FY = accounts[5]
		const uintsGse34t = BigInt("462")
		const uintwtXGCRj = BigInt("1697")
		const addressUAh6FOK = accounts[3]
		const uintJXNqKZF = BigInt("912")
		const boolIDmc8qu = await LayerxWCV8HzY.transfer.call(addressgtCM2FY, uintPdq2oB3, {from: accounts[2]});
		const uint256RA92O0W = await LayerxWCV8HzY.burn.call(uintsGse34t, {from: accounts[4]});
		const uintO3xaSl0 = await LayerxWCV8HzY.lock.call(uintwtXGCRj, {from: accounts[0]});
		const addressjjhTH5h = await LayerxWCV8HzY.setNewStakeCreator.call(addressUAh6FOK, {from: accounts[4]});
		const uintTRfPOpX = await LayerxWCV8HzY.lock.call(uintJXNqKZF, {from: accounts[4]});

		await expect(LayerxWCV8HzY.transfer.call(addressgtCM2FY, uintPdq2oB3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRC1SYdB = accounts[1]
		const LayerxwX7cbD = await Layerx.new(addressRC1SYdB, {from: accounts[3]});
		const addressb2eDA9V = accounts[2]
		const addressqcgTxaF = accounts[0]
		const uintqmoJYkD = BigInt("1949")
		const byteTi3X3Tz = "0x030f1916091e030c1d0a1a0e12140f0b10150a11160c1d0309"
		const uintnP46Rtm = BigInt("646")
		const addressZbi4b9 = accounts[2]
		const addressAISJPfT = accounts[4]
		const uintCvsHAG9 = await LayerxwX7cbD.allowance.call(addressqcgTxaF, addressb2eDA9V, {from: accounts[2]});
		const uintG4fYoW = await LayerxwX7cbD.exist.call(uintqmoJYkD, {from: accounts[2]});
		const boolusb2Vzr = await LayerxwX7cbD.approveAndCall.call(addressZbi4b9, uintnP46Rtm, byteTi3X3Tz, {from: accounts[2]});
		const addressNKEaNoK = await LayerxwX7cbD.setNewStakeCreator.call(addressAISJPfT, {from: accounts[3]});

		assert.equal(uintCvsHAG9, BigInt("0"))
		await expect(LayerxwX7cbD.exist.call(uintqmoJYkD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAfLhkTL = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressAfLhkTL, {from: accounts[2]});
		const address9f9ZZA = accounts[3]
		const uintIyrFvv9 = await LayerxxvZQHN8.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(address9f9ZZA, {from: accounts[4]});

		assert.equal(uintGqi0KW7, BigInt("0"))
		assert.equal(uintIyrFvv9, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addresszahelEZ = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addresszahelEZ, {from: accounts[2]});
		const addressSvcv0L6 = accounts[0]
		const addresst3Z8Lxu = accounts[4]
		const uintIyrFvv9 = await LayerxxvZQHN8.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxxvZQHN8.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const addressxObi5Y5 = await LayerxxvZQHN8.transferOwnership.call(addressSvcv0L6, {from: accounts[1]});
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addresst3Z8Lxu, {from: accounts[4]});

		assert.equal(uintIyrFvv9, BigInt("1"))
		await expect(LayerxxvZQHN8.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressuNmxyJl = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressuNmxyJl, {from: accounts[2]});
		const addressmOw3fgd = accounts[4]
		const uintz1NXVZv = BigInt("1318")
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addressmOw3fgd, {from: accounts[4]});
		await LayerxxvZQHN8.f.call({from: accounts[2]});
		const uint256mNRJDnJ = await LayerxxvZQHN8.burn.call(uintz1NXVZv, {from: accounts[0]});

		assert.equal(uintGqi0KW7, BigInt("0"))
		await expect(LayerxxvZQHN8.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMtL0ZhL = accounts[2]
		const LayerxdbQNMQJ = await Layerx.new(addressMtL0ZhL, {from: accounts[0]});
		const uintd9Ba7eW = BigInt("465")
		const uintB8FoOOH = BigInt("1777")
		const addressc1jTdw = accounts[1]
		const addressACgEqb = accounts[2]
		const uintWLPPznw = await LayerxdbQNMQJ.withdraw.call(uintd9Ba7eW, {from: accounts[0]});
		const boolx2Tc3X = await LayerxdbQNMQJ.approve.call(addressc1jTdw, uintB8FoOOH, {from: accounts[4]});
		const addressS7dLi5q = await LayerxdbQNMQJ.setNewStakeCreator.call(addressACgEqb, {from: accounts[0]});

		await expect(LayerxdbQNMQJ.withdraw.call(uintd9Ba7eW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWwtlao = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressWwtlao, {from: accounts[2]});
		const addressBhcs3va = accounts[2]
		const uintyoZsxx6 = BigInt("1015")
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addressBhcs3va, {from: accounts[4]});
		await LayerxxvZQHN8.addStakePayment.call({from: accounts[1]});
		const uintxROcyUk = await LayerxxvZQHN8.getStakesNum.call({from: accounts[4]});
		const uintWErHWBD = await LayerxxvZQHN8.lock.call(uintyoZsxx6, {from: accounts[2]});

		assert.equal(uintGqi0KW7, BigInt("0"))
		await expect(LayerxxvZQHN8.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressd7cXwRJ = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressd7cXwRJ, {from: accounts[2]});
		const addressREHz9pq = accounts[1]
		const addressEAMLfMe = accounts[3]
		const uintbiJ3Ttg = BigInt("1773")
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addressREHz9pq, {from: accounts[4]});
		const addressTJHGmgC = await LayerxxvZQHN8.transferOwnership.call(addressEAMLfMe, {from: accounts[1]});
		const uint256cM8dxi9 = await LayerxxvZQHN8.burn.call(uintbiJ3Ttg, {from: accounts[3]});

		assert.equal(uintGqi0KW7, BigInt("40000000000000000000000"))
		await expect(LayerxxvZQHN8.burn.call(uintbiJ3Ttg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjJsrB2x = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressjJsrB2x, {from: accounts[2]});
		const uintwUZyFN = BigInt("1715")
		const addressJHJjno = accounts[3]
		const addressVb8XrRC = accounts[1]
		const uint9QyhNI = BigInt("319")
		const addressKMWZUmV = accounts[0]
		const uintj3uxQqj = BigInt("121")
		const boolFxaaK7g = await LayerxxvZQHN8.approve.call(addressJHJjno, uintwUZyFN, {from: accounts[4]});
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addressVb8XrRC, {from: accounts[4]});
		await LayerxxvZQHN8.addStakePayment.call({from: accounts[1]});
		const boolO3nytgC = await LayerxxvZQHN8.approve.call(addressKMWZUmV, uint9QyhNI, {from: accounts[1]});
		const uintbLxHpSx = await LayerxxvZQHN8.lock.call(uintj3uxQqj, {from: accounts[4]});
		const uintxROcyUk = await LayerxxvZQHN8.getStakesNum.call({from: accounts[4]});

		assert.equal(boolFxaaK7g, true)
		assert.equal(uintGqi0KW7, BigInt("40000000000000000000000"))
		await expect(LayerxxvZQHN8.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJDMWyA = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressJDMWyA, {from: accounts[2]});
		const addressanVE5IP = accounts[1]
		const boolmojPlD = false
		const byteK6mm6Wa = "0x0108151e120505030606"
		const uintkkQJqeS = BigInt("1950")
		const addressgwG26qD = accounts[3]
		const uintGqi0KW7 = await LayerxxvZQHN8.balanceOf.call(addressanVE5IP, {from: accounts[4]});
		const boolOIFH6Lv = await LayerxxvZQHN8.setIsPaused.call(boolmojPlD, {from: accounts[1]});
		const boolzLTR2Pu = await LayerxxvZQHN8.approveAndCall.call(addressgwG26qD, uintkkQJqeS, byteK6mm6Wa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintGqi0KW7, BigInt("40000000000000000000000"))
		await expect(LayerxxvZQHN8.approveAndCall.call(addressgwG26qD, uintkkQJqeS, byteK6mm6Wa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressu3k3RQ4 = accounts[2]
		const Layerxil8LWnk = await Layerx.new(addressu3k3RQ4, {from: accounts[2]});
		const addressxWHMbpM = accounts[5]
		const uintjoRV9lu = BigInt("211")
		const uintX9muEKJ = BigInt("85")
		const addressMUZUnKO = await Layerxil8LWnk.setNewStakeCreator.call(addressxWHMbpM, {from: accounts[2]});
		const uintYSYwxH = await Layerxil8LWnk.lock.call(uintjoRV9lu, {from: accounts[5]});
		const uint256RgGqkCN = await Layerxil8LWnk.burn.call(uintX9muEKJ, {from: accounts[1]});
		const uintrolTYAz = await Layerxil8LWnk.getStakesNum.call({from: accounts[2]});
		const uintw39LESu = await Layerxil8LWnk.getStakesNum.call({from: accounts[0]});

		await expect(Layerxil8LWnk.lock.call(uintjoRV9lu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressC3WdcL = accounts[1]
		const LayerxxvZQHN8 = await Layerx.new(addressC3WdcL, {from: accounts[2]});
		const uintkIAqdY1 = BigInt("1448")
		await LayerxxvZQHN8.addStakePayment.call({from: accounts[1]});
		const uint256uJSYstc = await LayerxxvZQHN8.burn.call(uintkIAqdY1, {from: accounts[1]});
		const uintxROcyUk = await LayerxxvZQHN8.getStakesNum.call({from: accounts[4]});
		const uintsTIQ6hn = await LayerxxvZQHN8.getStakesNum.call({from: accounts[3]});
		await LayerxxvZQHN8.unlock.call({from: accounts[1]});

		await expect(LayerxxvZQHN8.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address7UgG2F = "0x0000000000000000000000000000000000000001"
		const Layerx42rOrZ = await Layerx.new(address7UgG2F, {from: "0x0000000000000000000000000000000000000001"});
		const bytedkstb8F = "0x08111605141114031f0d0206101805041c0c0b1619100e1c19"
		const uintD9RGzvx = BigInt("1659")
		const addressBTGI6BD = accounts[0]
		const uinthvxRUmy = BigInt("333")
		const addressVK4p87 = accounts[0]
		const addressPuQllmu = accounts[0]
		const boolDKEkupx = await Layerx42rOrZ.approveAndCall.call(addressBTGI6BD, uintD9RGzvx, bytedkstb8F, {from: accounts[0]});
		const boolWNNWQPx = await Layerx42rOrZ.transferFrom.call(addressPuQllmu, addressVK4p87, uinthvxRUmy, {from: "0x0000000000000000000000000000000000000001"});
	});
})