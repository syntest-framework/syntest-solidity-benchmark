const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractGTcNZxj = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueUdslxTY = BigInt("657")
		const toHKw7Os = accounts[3]
		const fromzSLoUKU = accounts[2]
		const spenderOaMsyqx = accounts[4]
		const ownerv7quAkc = accounts[4]
		const subtractedValueOHC8Hbe = BigInt("848")
		const spenderQONQQ9s = accounts[3]
		const valuehhGJSDI = BigInt("930")
		const toY4Lui2 = accounts[2]
		const addedValueAeHb4Ay = BigInt("1352")
		const spenderpW56qN3 = accounts[1]
		const nullTwfVpZu = await contractGTcNZxj.transferFrom.call(fromzSLoUKU, toHKw7Os, valueUdslxTY, {from: accounts[4]});
		const nullnfdWOr5 = await contractGTcNZxj.allowance.call(ownerv7quAkc, spenderOaMsyqx, {from: accounts[3]});
		const nullju3DEW = await contractGTcNZxj.decreaseAllowance.call(spenderQONQQ9s, subtractedValueOHC8Hbe, {from: accounts[2]});
		const nullZf55vuq = await contractGTcNZxj.transfer.call(toY4Lui2, valuehhGJSDI, {from: accounts[3]});
		const nullJVKFLbJ = await contractGTcNZxj.increaseAllowance.call(spenderpW56qN3, addedValueAeHb4Ay, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractroZvpij = await ERC20.new({from: accounts[4]});
		const valueuCa3BfW = BigInt("1158")
		const tomxWblfG = accounts[1]
		const fromAO0kB2B = accounts[5]
		const valueTkQRhb = BigInt("372")
		const spenderzzonO4O = accounts[0]
		const ownerxuvGGq8 = accounts[2]
		const addedValueNH6z8R = BigInt("1477")
		const spenderRxBHU2t = accounts[3]
		const nullKbNIC7v = await contractroZvpij.transferFrom.call(fromAO0kB2B, tomxWblfG, valueuCa3BfW, {from: accounts[2]});
		const nullZrrJSm = await contractroZvpij.approve.call(spenderzzonO4O, valueTkQRhb, {from: accounts[1]});
		const nullMCAsLzv = await contractroZvpij.balanceOf.call(ownerxuvGGq8, {from: accounts[3]});
		const nulloqsWhy = await contractroZvpij.increaseAllowance.call(spenderRxBHU2t, addedValueNH6z8R, {from: accounts[5]});

		await expect(contractroZvpij.transferFrom.call(fromAO0kB2B, tomxWblfG, valueuCa3BfW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractWF9Yg3v = await ERC20.new({from: accounts[4]});
		const ownerMF8U9aN = accounts[0]
		const addedValuexrRJmmt = BigInt("852")
		const spenderbPG5tuw = accounts[1]
		const valueYnKnTX3 = BigInt("1585")
		const tornPCi4F = accounts[1]
		const spenderHwrfS6G = accounts[5]
		const owneroI146fU = accounts[0]
		const spenderiY8RgOA = accounts[4]
		const ownerce9Ffkd = accounts[4]
		const nullKbtAQxE = await contractWF9Yg3v.balanceOf.call(ownerMF8U9aN, {from: accounts[0]});
		const nullIy3NF8u = await contractWF9Yg3v.increaseAllowance.call(spenderbPG5tuw, addedValuexrRJmmt, {from: accounts[1]});
		const nullafp0Lgv = await contractWF9Yg3v.transfer.call(tornPCi4F, valueYnKnTX3, {from: accounts[3]});
		const nullT9vlGPf = await contractWF9Yg3v.allowance.call(owneroI146fU, spenderHwrfS6G, {from: accounts[0]});
		const nullx9UnpM6 = await contractWF9Yg3v.allowance.call(ownerce9Ffkd, spenderiY8RgOA, {from: accounts[0]});

		assert.equal(nullIy3NF8u, true)
		assert.equal(nullKbtAQxE, 0)
		await expect(contractWF9Yg3v.transfer.call(tornPCi4F, valueYnKnTX3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractXJOhNHo = await ERC20.new({from: accounts[5]});
		const spenderXvOyPc = accounts[3]
		const ownerkIWbXdV = "0x0000000000000000000000000000000000000001"
		const valuegBTP7jf = BigInt("1952")
		const toPRlKU0n = accounts[2]
		const valueDVuikqk = BigInt("238")
		const toyaTqVAl = accounts[3]
		const fromDPW6S4 = accounts[4]
		const ownerlxtM6Qg = accounts[4]
		const valueXVCdj4L = BigInt("550")
		const tox6iyafA = accounts[2]
		const from4koBem = accounts[4]
		const nullmo0C5cM = await contractXJOhNHo.allowance.call(ownerkIWbXdV, spenderXvOyPc, {from: "0x0000000000000000000000000000000000000001"});
		const nullVP4AFDo = await contractXJOhNHo.transfer.call(toPRlKU0n, valuegBTP7jf, {from: accounts[0]});
		const nullqbi7Xsx = await contractXJOhNHo.transferFrom.call(fromDPW6S4, toyaTqVAl, valueDVuikqk, {from: accounts[2]});
		const nullmueu6z = await contractXJOhNHo.balanceOf.call(ownerlxtM6Qg, {from: accounts[3]});
		const nulltWoLjkZ = await contractXJOhNHo.transferFrom.call(from4koBem, tox6iyafA, valueXVCdj4L, {from: accounts[2]});

		assert.equal(nullmo0C5cM, 0)
		await expect(contractXJOhNHo.transfer.call(toPRlKU0n, valuegBTP7jf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgTjUCnA = await ERC20.new({from: accounts[3]});
		const valueydDHz0W = BigInt("78")
		const toNyod9oK = accounts[4]
		const fromFdadYhb = accounts[2]
		const valueImUBgbN = BigInt("950")
		const spenderq38vo3S = accounts[5]
		const valuej2uWw9h = BigInt("1466")
		const toneIRQzP = accounts[5]
		const fromGYCprJp = accounts[4]
		const nullo9cTS3z = await contractgTjUCnA.totalSupply.call({from: accounts[0]});
		const nullFRO3ejF = await contractgTjUCnA.transferFrom.call(fromFdadYhb, toNyod9oK, valueydDHz0W, {from: accounts[0]});
		const nullCcTfzou = await contractgTjUCnA.approve.call(spenderq38vo3S, valueImUBgbN, {from: "0x0000000000000000000000000000000000000001"});
		const nullHKZKudg = await contractgTjUCnA.transferFrom.call(fromGYCprJp, toneIRQzP, valuej2uWw9h, {from: accounts[4]});
		const nullzYlFgZF = await contractgTjUCnA.totalSupply.call({from: accounts[0]});

		assert.equal(nullo9cTS3z, 0)
		await expect(contractgTjUCnA.transferFrom.call(fromFdadYhb, toNyod9oK, valueydDHz0W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQ4Ggjp = await ERC20.new({from: accounts[3]});
		const valuemZCFRpv = BigInt("1323")
		const spendersXu074e = accounts[0]
		const valuefFfKZCw = BigInt("78")
		const toMjx1Sq4 = accounts[4]
		const fromuLcTllx = accounts[2]
		const valuehA6iLXp = BigInt("1145")
		const spenderQ20ycbC = accounts[5]
		const valueXSM4d1h = BigInt("1466")
		const toGwTPRe = accounts[5]
		const fromIQ4ZUFG = accounts[4]
		const ownerrrMO6TX = accounts[4]
		const nullCZsNAvp = await contractQ4Ggjp.approve.call(spendersXu074e, valuemZCFRpv, {from: "0x0000000000000000000000000000000000000001"});
		const nullk2deG5x = await contractQ4Ggjp.transferFrom.call(fromuLcTllx, toMjx1Sq4, valuefFfKZCw, {from: accounts[0]});
		const nullNIAmCGo = await contractQ4Ggjp.approve.call(spenderQ20ycbC, valuehA6iLXp, {from: accounts[1]});
		const nullLKFSmCC = await contractQ4Ggjp.transferFrom.call(fromIQ4ZUFG, toGwTPRe, valueXSM4d1h, {from: accounts[4]});
		const nullwSUmeaJ = await contractQ4Ggjp.totalSupply.call({from: accounts[0]});
		const nullQSDjFTG = await contractQ4Ggjp.balanceOf.call(ownerrrMO6TX, {from: accounts[4]});

		assert.equal(nullCZsNAvp, true)
		await expect(contractQ4Ggjp.transferFrom.call(fromuLcTllx, toMjx1Sq4, valuefFfKZCw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractRVXC3le = await ERC20.new({from: accounts[4]});
		const ownerlftl1L8 = accounts[6]
		const subtractedValueCljNB1 = BigInt("386")
		const spenderB0wWLNl = accounts[2]
		const addedValuedgkKBD = BigInt("48")
		const spenderBRLJjsj = accounts[3]
		const nullqHI0VRh = await contractRVXC3le.balanceOf.call(ownerlftl1L8, {from: accounts[2]});
		const nullZ8OHcYm = await contractRVXC3le.decreaseAllowance.call(spenderB0wWLNl, subtractedValueCljNB1, {from: accounts[2]});
		const nullKu4zXu3 = await contractRVXC3le.increaseAllowance.call(spenderBRLJjsj, addedValuedgkKBD, {from: accounts[3]});

		assert.equal(nullqHI0VRh, 0)
		await expect(contractRVXC3le.decreaseAllowance.call(spenderB0wWLNl, subtractedValueCljNB1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})