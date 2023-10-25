const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringfJMwt1Y = "MEv02E0o3PfYCAuJWA7ztYAPQmQURJoFke5g"
		const stringi758Y75 = "kawq9zmLMtqSxdgGDzLLOKt8zu2A8kpRIdaYW1Tjud7btLDOGAV4gk5OBy7JSVDVRonwKOWEm7"
		const uintolAB6ub = BigInt("28")
		const WeedburnGDR6EKZ = await Weedburn.new(stringfJMwt1Y, stringi758Y75, uintolAB6ub, {from: accounts[4]});
		const uintXoTUeq = BigInt("2017")
		const addressxPc64yG = accounts[0]
		const uintmrwM1cO = BigInt("1440")
		const addressXgZFcZD = accounts[0]
		const boolTrWKp7V = await WeedburnGDR6EKZ.decreaseAllowance.call(addressxPc64yG, uintXoTUeq, {from: accounts[3]});
		await WeedburnGDR6EKZ.enableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrHg6dbm = await WeedburnGDR6EKZ.approve.call(addressXgZFcZD, uintmrwM1cO, {from: accounts[1]});
	});

	it('test for Weedburn', async () => {
		const Weedburnij3XWe = await Weedburn.new({from: accounts[4]});
		const addressuEHS6Gt = accounts[5]
		const uint256svhYllE = await Weedburnij3XWe.balanceOf.call(addressuEHS6Gt, {from: accounts[2]});
		await Weedburnij3XWe.disableLimitMode.call({from: accounts[4]});
		const stringWmAbDo9 = await Weedburnij3XWe.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256svhYllE, BigInt("0"))
		await expect(Weedburnij3XWe.disableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJ0zh5a = await Weedburn.new({from: accounts[2]});
		const addressTuMf1RV = accounts[1]
		const uintmPQx3K3 = BigInt("635")
		const addressIDDAVxO = accounts[3]
		const uintz0OQycZ = BigInt("74")
		const addressLs9Zy3u = accounts[0]
		const uint256y04rFF = await WeedburnJ0zh5a.balanceOf.call(addressTuMf1RV, {from: accounts[3]});
		const boolCqStxnh = await WeedburnJ0zh5a.increaseAllowance.call(addressIDDAVxO, uintmPQx3K3, {from: accounts[1]});
		const boolbIeuohK = await WeedburnJ0zh5a.approve.call(addressLs9Zy3u, uintz0OQycZ, {from: accounts[1]});

		assert.equal(boolCqStxnh, true)
		assert.equal(boolbIeuohK, true)
		assert.equal(uint256y04rFF, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnRjSNv99 = await Weedburn.new({from: accounts[0]});
		const uintgjGmzwy = BigInt("986")
		const uint8hNa5jHN = await WeedburnRjSNv99.decimals.call({from: accounts[0]});
		const uint8v6A77R = await WeedburnRjSNv99.decimals.call({from: accounts[0]});
		const uint256WmXns9d = await WeedburnRjSNv99.burn.call(uintgjGmzwy, {from: accounts[5]});

		assert.equal(uint8hNa5jHN, BigInt("18"))
		assert.equal(uint8v6A77R, BigInt("18"))
		await expect(WeedburnRjSNv99.burn.call(uintgjGmzwy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpbGD96a = await Weedburn.new({from: accounts[3]});
		const addressbiXPzQr = accounts[1]
		const addressKLulwxb = accounts[1]
		const addressvSxzNxp = accounts[2]
		const addresskQEeIhl = accounts[3]
		const uintXhCXYRE = BigInt("354")
		const addressZOIKLS = accounts[4]
		const uint256m8JCD0 = await WeedburnpbGD96a.allowance.call(addressKLulwxb, addressbiXPzQr, {from: accounts[5]});
		const uint256tVZxxQP = await WeedburnpbGD96a.allowance.call(addresskQEeIhl, addressvSxzNxp, {from: accounts[1]});
		const stringm5IdiQK = await WeedburnpbGD96a.name.call({from: accounts[5]});
		const boolQAhdzgP = await WeedburnpbGD96a.transfer.call(addressZOIKLS, uintXhCXYRE, {from: accounts[5]});

		assert.equal(stringm5IdiQK, "t.me/burnweed1")
		assert.equal(uint256m8JCD0, BigInt("0"))
		assert.equal(uint256tVZxxQP, BigInt("0"))
		await expect(WeedburnpbGD96a.transfer.call(addressZOIKLS, uintXhCXYRE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpbGD96a = await Weedburn.new({from: accounts[3]});
		const addressz6tQGTy = accounts[1]
		const addressg7AdX3B = accounts[1]
		const address7FWjuf = accounts[2]
		const addressbpdH8N3 = accounts[3]
		const uintsqp5kuD = BigInt("689")
		const addressQhy9l73 = accounts[0]
		const uintqCRkKgh = BigInt("1521")
		const addressYWCAPDU = accounts[1]
		const uintiT9nSdB = BigInt("1391")
		const addressOaDykU = accounts[3]
		const uintUVOm7Dy = BigInt("354")
		const addressvR2QZc = accounts[4]
		const uint256m8JCD0 = await WeedburnpbGD96a.allowance.call(addressg7AdX3B, addressz6tQGTy, {from: accounts[5]});
		const uint256tVZxxQP = await WeedburnpbGD96a.allowance.call(addressbpdH8N3, address7FWjuf, {from: accounts[1]});
		const addressOe9tAyq = await WeedburnpbGD96a.burnFrom.call(addressQhy9l73, uintsqp5kuD, {from: accounts[2]});
		const addressGbAtzNX = await WeedburnpbGD96a.burnFrom.call(addressYWCAPDU, uintqCRkKgh, {from: accounts[1]});
		const stringm5IdiQK = await WeedburnpbGD96a.name.call({from: accounts[5]});
		const boolMRI6y8f = await WeedburnpbGD96a.transfer.call(addressOaDykU, uintiT9nSdB, {from: accounts[5]});
		const boolQAhdzgP = await WeedburnpbGD96a.transfer.call(addressvR2QZc, uintUVOm7Dy, {from: accounts[5]});

		assert.equal(uint256m8JCD0, BigInt("0"))
		assert.equal(uint256tVZxxQP, BigInt("0"))
		await expect(WeedburnpbGD96a.burnFrom.call(addressQhy9l73, uintsqp5kuD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpbGD96a = await Weedburn.new({from: accounts[3]});
		const addressSDeEJWh = accounts[1]
		const addressLmaPXZA = accounts[1]
		const uintITawhpR = BigInt("354")
		const addressYYOhRyv = accounts[4]
		const uintcF1CiEL = BigInt("1241")
		const addressad7TuBG = accounts[4]
		const uint256m8JCD0 = await WeedburnpbGD96a.allowance.call(addressLmaPXZA, addressSDeEJWh, {from: accounts[5]});
		await WeedburnpbGD96a.enableLimitMode.call({from: accounts[2]});
		const stringG5ffg9j = await WeedburnpbGD96a.symbol.call({from: accounts[3]});
		const stringm5IdiQK = await WeedburnpbGD96a.name.call({from: accounts[5]});
		const boolQAhdzgP = await WeedburnpbGD96a.transfer.call(addressYYOhRyv, uintITawhpR, {from: accounts[5]});
		const boolz6MuXmx = await WeedburnpbGD96a.increaseAllowance.call(addressad7TuBG, uintcF1CiEL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256m8JCD0, BigInt("0"))
		await expect(WeedburnpbGD96a.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpbGD96a = await Weedburn.new({from: accounts[3]});
		const addressdz9TRai = accounts[1]
		const addressiNXnLp3 = accounts[1]
		const uintyKOpBmO = BigInt("552")
		const addressCeQEGrW = accounts[4]
		const addressbKXPyWb = accounts[2]
		const addressJvdQSOZ = accounts[4]
		const uintwHLSFOU = BigInt("354")
		const addressQSK4sBL = accounts[4]
		const uint256m8JCD0 = await WeedburnpbGD96a.allowance.call(addressiNXnLp3, addressdz9TRai, {from: accounts[5]});
		const booliFYet1D = await WeedburnpbGD96a.decreaseAllowance.call(addressCeQEGrW, uintyKOpBmO, {from: accounts[3]});
		const uint256tVZxxQP = await WeedburnpbGD96a.allowance.call(addressJvdQSOZ, addressbKXPyWb, {from: accounts[1]});
		const boolQAhdzgP = await WeedburnpbGD96a.transfer.call(addressQSK4sBL, uintwHLSFOU, {from: accounts[5]});

		assert.equal(uint256m8JCD0, BigInt("0"))
		await expect(WeedburnpbGD96a.decreaseAllowance.call(addressCeQEGrW, uintyKOpBmO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnpbGD96a = await Weedburn.new({from: accounts[3]});
		const addressrnb7T9 = accounts[0]
		const addressAnDfi5T = accounts[1]
		const addressIpPdA7C = accounts[1]
		const uintY8RDE2C = BigInt("1944")
		const addressg5iLFtn = accounts[2]
		const addressQcBwuj = accounts[2]
		const addressfXrKx15 = accounts[3]
		const addressCK2I939 = accounts[3]
		const uintzk8Mvwg = BigInt("1221")
		const addressl7DFHhV = accounts[5]
		const uintB3VzCyB = BigInt("354")
		const addressw7EYSad = accounts[4]
		const uint256JMaxKiG = await WeedburnpbGD96a.balanceOf.call(addressrnb7T9, {from: accounts[2]});
		const uint256m8JCD0 = await WeedburnpbGD96a.allowance.call(addressIpPdA7C, addressAnDfi5T, {from: accounts[5]});
		const stringXC6pJ97 = await WeedburnpbGD96a.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSaQpQ6 = await WeedburnpbGD96a.transferFrom.call(addressQcBwuj, addressg5iLFtn, uintY8RDE2C, {from: accounts[0]});
		const uint256tVZxxQP = await WeedburnpbGD96a.allowance.call(addressCK2I939, addressfXrKx15, {from: accounts[1]});
		const boolvvnyXlR = await WeedburnpbGD96a.increaseAllowance.call(addressl7DFHhV, uintzk8Mvwg, {from: accounts[2]});
		const boolQAhdzgP = await WeedburnpbGD96a.transfer.call(addressw7EYSad, uintB3VzCyB, {from: accounts[5]});

		assert.equal(stringXC6pJ97, "t.me/burnweed1")
		assert.equal(uint256JMaxKiG, BigInt("0"))
		assert.equal(uint256m8JCD0, BigInt("0"))
		await expect(WeedburnpbGD96a.transferFrom.call(addressQcBwuj, addressg5iLFtn, uintY8RDE2C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDpDCefv = await Weedburn.new({from: accounts[4]});
		const uintVKIISh8 = BigInt("1803")
		const addressf0VWHk9 = accounts[0]
		const uint256XWyAPaT = await WeedburnDpDCefv.totalSupply.call({from: accounts[1]});
		const boolwpkS7Jk = await WeedburnDpDCefv.approve.call(addressf0VWHk9, uintVKIISh8, {from: accounts[0]});
		await WeedburnDpDCefv.enableLimitMode.call({from: accounts[4]});

		assert.equal(boolwpkS7Jk, true)
		assert.equal(uint256XWyAPaT, BigInt("100000000000000000000000"))
		await expect(WeedburnDpDCefv.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburncVSMXK = await Weedburn.new({from: accounts[2]});
		const uintoAn4c7W = BigInt("1908")
		const addressG4akl1j = accounts[4]
		const uintQboI1XG = BigInt("779")
		const addressEggQjmi = accounts[5]
		const boolS4QLgE = await WeedburncVSMXK.increaseAllowance.call(addressG4akl1j, uintoAn4c7W, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburncVSMXK.enableDevMode.call({from: accounts[4]});
		const boolzMn2xS3 = await WeedburncVSMXK.decreaseAllowance.call(addressEggQjmi, uintQboI1XG, {from: accounts[4]});

		assert.equal(boolS4QLgE, true)
		await expect(WeedburncVSMXK.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnN2j5UXR = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYgIHfA4 = BigInt("1215")
		const addressVKZd69d = accounts[0]
		const uintxkyCF6n = BigInt("154")
		const addressc6akvEW = accounts[4]
		const addressRcpyKG = accounts[1]
		const boolZssjsl9 = await WeedburnN2j5UXR.decreaseAllowance.call(addressVKZd69d, uintYgIHfA4, {from: accounts[5]});
		const boolIass0Ym = await WeedburnN2j5UXR.transferFrom.call(addressRcpyKG, addressc6akvEW, uintxkyCF6n, {from: accounts[3]});
		const stringwCBEJLC = await WeedburnN2j5UXR.name.call({from: accounts[0]});
	});

	it('test for Weedburn', async () => {
		const WeedburnyP4oXjq = await Weedburn.new({from: accounts[3]});
		const addressoHZcpkn = accounts[3]
		const addressZHXKgZ = accounts[0]
		const uints7SgMdV = BigInt("1596")
		const addressrfkfdjr = accounts[3]
		await WeedburnyP4oXjq.disableDevMode.call({from: accounts[1]});
		await WeedburnyP4oXjq.enableLimitMode.call({from: accounts[1]});
		const uint2567JHacJ = await WeedburnyP4oXjq.allowance.call(addressZHXKgZ, addressoHZcpkn, {from: accounts[0]});
		const uint256UFvIWpm = await WeedburnyP4oXjq.totalSupply.call({from: accounts[4]});
		const boolLImYMAX = await WeedburnyP4oXjq.transfer.call(addressrfkfdjr, uints7SgMdV, {from: accounts[4]});

		await expect(WeedburnyP4oXjq.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnARN609n = await Weedburn.new({from: accounts[0]});
		const uintfCuKXcK = BigInt("968")
		const addresskvEhFC = accounts[4]
		const uintx4yE51 = BigInt("1398")
		const addressqO31bR = accounts[1]
		const boolp8TACjN = await WeedburnARN609n.approve.call(addresskvEhFC, uintfCuKXcK, {from: accounts[2]});
		const boolhOWjqe = await WeedburnARN609n.transfer.call(addressqO31bR, uintx4yE51, {from: accounts[0]});
		const uint256nH25o48 = await WeedburnARN609n.totalSupply.call({from: accounts[3]});

		assert.equal(boolhOWjqe, true)
		assert.equal(boolp8TACjN, true)
		assert.equal(uint256nH25o48, BigInt("100000000000000000000000"))
	});
})