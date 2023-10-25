const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTT1O3sBC = await PACT.new({from: accounts[5]});
		const addresskJOZih2 = accounts[1]
		const stringB2o4cc9 = await PACTT1O3sBC.symbol.call({from: accounts[0]});
		const uintI26PkXX = await PACTT1O3sBC.balanceOf.call(addresskJOZih2, {from: accounts[2]});
		const uint8dDm8LUR = await PACTT1O3sBC.decimals.call({from: accounts[1]});
		const uint8h50eqhO = await PACTT1O3sBC.decimals.call({from: accounts[3]});

		assert.equal(stringB2o4cc9, "PACT")
		assert.equal(uint8dDm8LUR, BigInt("18"))
		assert.equal(uint8h50eqhO, BigInt("18"))
		assert.equal(uintI26PkXX, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTyRJck86 = await PACT.new({from: accounts[3]});
		const addressJEpzMNg = accounts[5]
		const addresspsnAgSz = accounts[5]
		const addressw6ystpC = accounts[5]
		const addressaBvCJm0 = accounts[3]
		const addressLqVK9Sw = accounts[1]
		const addressZh33RgW = accounts[4]
		const uintzh57m0 = await PACTyRJck86.allowance.call(addresspsnAgSz, addressJEpzMNg, {from: accounts[0]});
		const uintqtqWN4z = await PACTyRJck86.allowance.call(addressaBvCJm0, addressw6ystpC, {from: accounts[3]});
		const boolY6ZUY93 = await PACTyRJck86.setupTeam.call(addressLqVK9Sw, {from: accounts[0]});
		const boolusHx2un = await PACTyRJck86.setupTeam.call(addressZh33RgW, {from: accounts[0]});

		assert.equal(uintqtqWN4z, BigInt("0"))
		assert.equal(uintzh57m0, BigInt("0"))
		await expect(PACTyRJck86.setupTeam.call(addressLqVK9Sw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTXnBaQz9 = await PACT.new({from: accounts[5]});
		const addressiCUFfkp = accounts[5]
		const addressFZZdG7H = accounts[5]
		const addressI9tYfwG = accounts[1]
		const booljmrIf2 = await PACTXnBaQz9.setupRewards.call(addressiCUFfkp, {from: accounts[4]});
		const boolN3E9RnY = await PACTXnBaQz9.setupReserve.call(addressFZZdG7H, {from: accounts[1]});
		const boolHD8kX6Z = await PACTXnBaQz9.setupReserve.call(addressI9tYfwG, {from: accounts[4]});

		await expect(PACTXnBaQz9.setupRewards.call(addressiCUFfkp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTjnsPNYX = await PACT.new({from: accounts[5]});
		const uintnUTGx1q = BigInt("1273")
		const address9TDiHD = "0x0000000000000000000000000000000000000001"
		const uintaCzguD = BigInt("1988")
		const addresslud9c7a = accounts[4]
		const uintLDqAaOv = BigInt("91")
		const addressUBtKKh = accounts[4]
		const boolGMfuk1 = await PACTjnsPNYX.burn.call(address9TDiHD, uintnUTGx1q, {from: accounts[4]});
		const uintQPss2sd = await PACTjnsPNYX.totalSupply.call({from: accounts[1]});
		const booluVWq1yU = await PACTjnsPNYX.approve.call(addresslud9c7a, uintaCzguD, {from: accounts[4]});
		const boolZDAQlvj = await PACTjnsPNYX.transfer.call(addressUBtKKh, uintLDqAaOv, {from: accounts[5]});

		await expect(PACTjnsPNYX.burn.call(address9TDiHD, uintnUTGx1q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTT3yqTqP = await PACT.new({from: accounts[4]});
		const addresspvwZcFv = "0x0000000000000000000000000000000000000001"
		const addressnjkx9eC = accounts[2]
		const uintG1JUjCG = BigInt("1795")
		const addresskw9lPFO = "0x0000000000000000000000000000000000000001"
		const addresszA4Z9R3 = accounts[0]
		const addresspgmjiiv = accounts[3]
		const uintruJnU6q = await PACTT3yqTqP.totalSupply.call({from: accounts[3]});
		const boolTOx1bgD = await PACTT3yqTqP.setupFarming.call(addresspvwZcFv, {from: accounts[2]});
		const boolfkhTkCv = await PACTT3yqTqP.setupTeam.call(addressnjkx9eC, {from: accounts[2]});
		const boolK9AXhjn = await PACTT3yqTqP.approve.call(addresskw9lPFO, uintG1JUjCG, {from: accounts[5]});
		const uintZ1Pmu1a = await PACTT3yqTqP.balanceOf.call(addresszA4Z9R3, {from: accounts[5]});
		const boolhMUAcRq = await PACTT3yqTqP.setupRewards.call(addresspgmjiiv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintruJnU6q, BigInt("1000000000000000000000000000"))
		await expect(PACTT3yqTqP.setupFarming.call(addresspvwZcFv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJJl2SRm = await PACT.new({from: accounts[2]});
		const address78U10E = accounts[2]
		const addresssnnG6fk = accounts[3]
		const boolRuh4eGv = await PACTJJl2SRm.setupReserve.call(address78U10E, {from: accounts[1]});
		const uintkxu0yo = await PACTJJl2SRm.totalSupply.call({from: accounts[0]});
		const boolrIde7tL = await PACTJJl2SRm.setupTeam.call(addresssnnG6fk, {from: accounts[1]});

		await expect(PACTJJl2SRm.setupReserve.call(address78U10E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTA5dHmtM = await PACT.new({from: accounts[1]});
		const uintq3lG4bq = BigInt("650")
		const addressqtgUUhb = accounts[1]
		const uintXezyEGZ = BigInt("626")
		const addressC7oiGu = accounts[4]
		const addressbOUuvdS = accounts[5]
		const uinteKLqMgm = BigInt("240")
		const addressvNlMp5q = "0x0000000000000000000000000000000000000001"
		const addressd3NPU4M = accounts[5]
		const boolxatvyd8 = await PACTA5dHmtM.approve.call(addressqtgUUhb, uintq3lG4bq, {from: accounts[5]});
		const boolEvN4Pvo = await PACTA5dHmtM.transferFrom.call(addressbOUuvdS, addressC7oiGu, uintXezyEGZ, {from: accounts[1]});
		const uint8irpmrzx = await PACTA5dHmtM.decimals.call({from: accounts[0]});
		const boolb5wSAgg = await PACTA5dHmtM.transferFrom.call(addressd3NPU4M, addressvNlMp5q, uinteKLqMgm, {from: accounts[4]});

		assert.equal(boolxatvyd8, true)
		await expect(PACTA5dHmtM.transferFrom.call(addressbOUuvdS, addressC7oiGu, uintXezyEGZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkTXU0vk = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressme3higx = accounts[2]
		const addressg8TKzyi = accounts[2]
		const uintT4VOFOi = BigInt("109")
		const addressUrqxSSm = accounts[2]
		const addressJEuxxhN = accounts[0]
		const addressiyX7JeZ = accounts[0]
		const addressPYiUQu0 = accounts[5]
		const boolqzN6JMw = await PACTkTXU0vk.setupRewards.call(addressme3higx, {from: "0x0000000000000000000000000000000000000001"});
		const uintwUR0zXK = await PACTkTXU0vk.balanceOf.call(addressg8TKzyi, {from: accounts[0]});
		const boolgXiFfCT = await PACTkTXU0vk.transfer.call(addressUrqxSSm, uintT4VOFOi, {from: accounts[2]});
		const boolCaW2Vb5 = await PACTkTXU0vk.setupBasePool.call(addressJEuxxhN, {from: accounts[0]});
		const stringmPitWTg = await PACTkTXU0vk.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint3WZbdv = await PACTkTXU0vk.allowance.call(addressPYiUQu0, addressiyX7JeZ, {from: accounts[3]});
	});

	it('test for PACT', async () => {
		const PACTj4l0N3P = await PACT.new({from: accounts[1]});
		const uintbbxUIC1 = BigInt("886")
		const addressWCI1SjQ = accounts[4]
		const addressc6Y7Nlk = accounts[1]
		const uintC39K8fb = BigInt("526")
		const addressz76qgQi = "0x0000000000000000000000000000000000000001"
		const stringHkHHG8O = await PACTj4l0N3P.name.call({from: accounts[1]});
		const boolHQQCFAE = await PACTj4l0N3P.burn.call(addressWCI1SjQ, uintbbxUIC1, {from: accounts[4]});
		const boolxHOdPOZ = await PACTj4l0N3P.setupBasePool.call(addressc6Y7Nlk, {from: accounts[0]});
		const boolkRjSNhs = await PACTj4l0N3P.transfer.call(addressz76qgQi, uintC39K8fb, {from: accounts[5]});

		assert.equal(stringHkHHG8O, "P2PB2B community token")
		await expect(PACTj4l0N3P.burn.call(addressWCI1SjQ, uintbbxUIC1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTXnBaQz9 = await PACT.new({from: accounts[5]});
		const uint8julPW = BigInt("1979")
		const addressHrvd44h = accounts[0]
		const addressnXbQVPL = accounts[5]
		const addressLxB1I7f = accounts[5]
		const uintU73v5nD = BigInt("974")
		const addresswQqXi48 = accounts[4]
		const addressTwDs2Ji = accounts[1]
		const boolBYy2Ajq = await PACTXnBaQz9.transfer.call(addressHrvd44h, uint8julPW, {from: accounts[2]});
		const booljmrIf2 = await PACTXnBaQz9.setupRewards.call(addressnXbQVPL, {from: accounts[4]});
		const boolN3E9RnY = await PACTXnBaQz9.setupReserve.call(addressLxB1I7f, {from: accounts[1]});
		const boolvdurIF3 = await PACTXnBaQz9.burn.call(addresswQqXi48, uintU73v5nD, {from: accounts[2]});
		const boolHD8kX6Z = await PACTXnBaQz9.setupReserve.call(addressTwDs2Ji, {from: accounts[4]});

		await expect(PACTXnBaQz9.transfer.call(addressHrvd44h, uint8julPW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTXnBaQz9 = await PACT.new({from: accounts[5]});
		const addressCQRg0md = accounts[3]
		const addressCGsrzWM = accounts[1]
		const boolzt7xOZY = await PACTXnBaQz9.setupBasePool.call(addressCQRg0md, {from: accounts[3]});
		const boolHD8kX6Z = await PACTXnBaQz9.setupReserve.call(addressCGsrzWM, {from: accounts[4]});

		await expect(PACTXnBaQz9.setupBasePool.call(addressCQRg0md, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})