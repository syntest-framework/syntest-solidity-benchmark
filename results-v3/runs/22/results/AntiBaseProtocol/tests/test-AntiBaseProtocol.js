const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolYkxuB4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintrsoCZ4Y = BigInt("1543")
		const addressY6cAiTH = accounts[2]
		const uint256m8iWR5O = await AntiBaseProtocolYkxuB4.totalSupply.call({from: accounts[2]});
		await AntiBaseProtocolYkxuB4.onlyOwner.call({from: accounts[4]});
		const uint8u5zezO3 = await AntiBaseProtocolYkxuB4.decimals.call({from: accounts[1]});
		const stringTtE9GJh = await AntiBaseProtocolYkxuB4.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCiqARai = await AntiBaseProtocolYkxuB4._burnFrom.call(addressY6cAiTH, uintrsoCZ4Y, {from: accounts[1]});

		assert.equal(uint256m8iWR5O, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolYkxuB4.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringq7Ca2Z = "oXyNi99VbpcgpuHGqOtWObHnYPsM0CSRoq8gr11ihAz3jkQ772lZ26ZTN"
		const stringR1AyYL = "0KCJbQmjUx9ETwbKetizB57TZVk6IAy5IAtX6v532IithjFM8BZXf5MstdCJH"
		const uintgZznTIF = BigInt("202")
		const AntiBaseProtocolgzyB3xv = await AntiBaseProtocol.new(stringq7Ca2Z, stringR1AyYL, uintgZznTIF, {from: accounts[4]});
		const uintg1o1AUY = BigInt("881")
		const uintts1nZjH = BigInt("693")
		const uintOJPI0Zr = BigInt("620")
		const uint256Ozok6RV = await AntiBaseProtocolgzyB3xv.findRewardFee.call(uintg1o1AUY, {from: accounts[3]});
		const uint256hHl4JHZ = await AntiBaseProtocolgzyB3xv.findBurnFee.call(uintts1nZjH, {from: accounts[3]});
		const uint8nrqnowo = await AntiBaseProtocolgzyB3xv.decimals.call({from: accounts[4]});
		await AntiBaseProtocolgzyB3xv.renounceOwnership.call({from: accounts[2]});
		const uint256HswYxTv = await AntiBaseProtocolgzyB3xv.findRewardFee.call(uintOJPI0Zr, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltKI9xT3 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintR4kAEx = BigInt("299")
		const uintICPPqKx = BigInt("638")
		const addressCFtVSb = accounts[2]
		const addresstAvdluN = accounts[5]
		const uintCzkPMbd = BigInt("1851")
		const addressg55gJQm = accounts[3]
		const addressVyMUGn = accounts[1]
		const uint256m9fKRsA = await AntiBaseProtocoltKI9xT3.burn.call(uintR4kAEx, {from: accounts[0]});
		const stringUXKBzug = await AntiBaseProtocoltKI9xT3.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressgFwMEg2 = await AntiBaseProtocoltKI9xT3._approve.call(addresstAvdluN, addressCFtVSb, uintICPPqKx, {from: accounts[0]});
		const boolzwr7SqU = await AntiBaseProtocoltKI9xT3.transferFrom.call(addressVyMUGn, addressg55gJQm, uintCzkPMbd, {from: accounts[5]});

		await expect(AntiBaseProtocoltKI9xT3.burn.call(uintR4kAEx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const addressNFAAUgI = accounts[1]
		const addresswcT7kxc = accounts[0]
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addresswcT7kxc, addressNFAAUgI, {from: accounts[5]});

		assert.equal(uint256QrvQYwv, BigInt("0"))
		assert.equal(uint8aRfS3Z, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgMW33Ks = await AntiBaseProtocol.new({from: accounts[0]});
		const addressP1Gjs6 = accounts[1]
		const addresso688M8n = "0x0000000000000000000000000000000000000001"
		const addressnkEBFU1 = await AntiBaseProtocolgMW33Ks.transferOwnership.call(addressP1Gjs6, {from: accounts[1]});
		const addressfkytdnl = await AntiBaseProtocolgMW33Ks._transferOwnership.call(addresso688M8n, {from: accounts[0]});
		await AntiBaseProtocolgMW33Ks.renounceOwnership.call({from: accounts[3]});

		await expect(AntiBaseProtocolgMW33Ks.transferOwnership.call(addressP1Gjs6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltVpmbIg = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintncAaRu = BigInt("1297")
		const addressSwQn3ME = accounts[1]
		const uinti3iu3qs = BigInt("1327")
		const addressGuPBovA = accounts[2]
		const addressGEcuAVP = accounts[1]
		const addressqAhZBkV = accounts[3]
		const addresswKjUqlz = "0x0000000000000000000000000000000000000001"
		const addressyeZ6Jml = accounts[1]
		const stringHtLFSV2 = await AntiBaseProtocoltVpmbIg.symbol.call({from: accounts[0]});
		const addressi4i8x6s = await AntiBaseProtocoltVpmbIg._mint.call(addressSwQn3ME, uintncAaRu, {from: accounts[3]});
		const boolCiPGO8C = await AntiBaseProtocoltVpmbIg.transferFrom.call(addressGEcuAVP, addressGuPBovA, uinti3iu3qs, {from: accounts[5]});
		await AntiBaseProtocoltVpmbIg.requestGas.call({from: accounts[4]});
		const uint256T3lOrPn = await AntiBaseProtocoltVpmbIg.balanceOf.call(addressqAhZBkV, {from: accounts[4]});
		const uint256KW9Cp0 = await AntiBaseProtocoltVpmbIg.allowance.call(addressyeZ6Jml, addresswKjUqlz, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintgri3cYK = BigInt("399")
		const addressCs3ousr = accounts[4]
		const addressxfXi88K = accounts[1]
		const uinthSDOAMR = BigInt("856")
		const addressz9Rw4lh = accounts[1]
		const addressWmFReV3 = accounts[0]
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBNuFWG6 = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressxfXi88K, addressCs3ousr, uintgri3cYK, {from: accounts[2]});
		const uint256m1GKvDa = await AntiBaseProtocolyC2bXYi.findBurnFee.call(uinthSDOAMR, {from: accounts[0]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressWmFReV3, addressz9Rw4lh, {from: accounts[5]});

		assert.equal(uint8aRfS3Z, BigInt("18"))
		await expect(AntiBaseProtocolyC2bXYi.transferFrom.call(addressxfXi88K, addressCs3ousr, uintgri3cYK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintiM3lhdy = BigInt("2001")
		const addressfakUWR = accounts[1]
		const addressOfYaQW = accounts[1]
		const uint256MFLByJ4 = await AntiBaseProtocolyC2bXYi.findRewardFee.call(uintiM3lhdy, {from: accounts[0]});
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressOfYaQW, addressfakUWR, {from: accounts[5]});

		assert.equal(uint256MFLByJ4, BigInt("105"))
		assert.equal(uint256QrvQYwv, BigInt("0"))
		assert.equal(uint8aRfS3Z, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintAQOatiF = BigInt("209")
		const addressRaHrAC = accounts[3]
		const uintbUEUyLb = BigInt("1975")
		const addresstv9Unof = accounts[4]
		const addressE15fT4c = accounts[1]
		const addressqsUgMD0 = accounts[0]
		const boolHkQiNu7 = await AntiBaseProtocolyC2bXYi.decreaseAllowance.call(addressRaHrAC, uintAQOatiF, {from: accounts[2]});
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXRb1hfX = await AntiBaseProtocolyC2bXYi.approve.call(addresstv9Unof, uintbUEUyLb, {from: accounts[1]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressqsUgMD0, addressE15fT4c, {from: accounts[5]});

		await expect(AntiBaseProtocolyC2bXYi.decreaseAllowance.call(addressRaHrAC, uintAQOatiF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintJlLPyJ = BigInt("1072")
		const addresseeQmG89 = accounts[3]
		const uintGLKV1hU = BigInt("1532")
		const addressMNeSEPX = accounts[4]
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslBXEHZ1 = await AntiBaseProtocolyC2bXYi.burnFrom.call(addresseeQmG89, uintJlLPyJ, {from: accounts[3]});
		const stringoimz5Tv = await AntiBaseProtocolyC2bXYi.symbol.call({from: accounts[4]});
		const boollKco2Ez = await AntiBaseProtocolyC2bXYi.increaseAllowance.call(addressMNeSEPX, uintGLKV1hU, {from: accounts[0]});

		assert.equal(uint8aRfS3Z, BigInt("18"))
		await expect(AntiBaseProtocolyC2bXYi.burnFrom.call(addresseeQmG89, uintJlLPyJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintygdM68M = BigInt("929")
		const addressN56cFP = accounts[3]
		const addressNMKaE6S = accounts[2]
		const uintrN7cr8s = BigInt("252")
		const addresshuPAE1q = accounts[2]
		const addressM3dUsCV = accounts[2]
		const addressvAcXQ4F = accounts[0]
		await AntiBaseProtocolyC2bXYi.renounceOwnership.call({from: accounts[0]});
		const boolej5QgVb = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressNMKaE6S, addressN56cFP, uintygdM68M, {from: accounts[5]});
		const addressPPq2ejf = await AntiBaseProtocolyC2bXYi._burn.call(addresshuPAE1q, uintrN7cr8s, {from: accounts[2]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressvAcXQ4F, addressM3dUsCV, {from: accounts[5]});

		await expect(AntiBaseProtocolyC2bXYi.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintY5yKTAo = BigInt("1286")
		const addresssWrfMxq = accounts[2]
		const addressp0VQIbf = accounts[4]
		const addressZl88yZ = accounts[1]
		const addressmYjNTQJ = accounts[0]
		const stringm5OThAQ = await AntiBaseProtocolyC2bXYi.name.call({from: accounts[0]});
		const boolYfyImVo = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressp0VQIbf, addresssWrfMxq, uintY5yKTAo, {from: accounts[4]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressmYjNTQJ, addressZl88yZ, {from: accounts[5]});

		assert.equal(stringm5OThAQ, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolyC2bXYi.transferFrom.call(addressp0VQIbf, addresssWrfMxq, uintY5yKTAo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const addressCmRj9Yk = accounts[3]
		const addressflWbU48 = accounts[4]
		const uintMxFy1QP = BigInt("73")
		const addressYgGLhR8 = accounts[4]
		const uint256y48Y1vn = await AntiBaseProtocolyC2bXYi.allowance.call(addressflWbU48, addressCmRj9Yk, {from: accounts[4]});
		const boold0EcA0 = await AntiBaseProtocolyC2bXYi.increaseAllowance.call(addressYgGLhR8, uintMxFy1QP, {from: accounts[2]});

		assert.equal(boold0EcA0, true)
		assert.equal(uint256y48Y1vn, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const addressqbAbzNQ = accounts[1]
		const addressPI3xF8b = accounts[2]
		const addressryD3oLG = accounts[1]
		const addresstgWAHQA = accounts[0]
		const addressHe9QAyC = accounts[0]
		const uintlsbpPb6 = BigInt("350")
		const addressmsKWMaI = accounts[4]
		const uint256Cfv7kBN = await AntiBaseProtocolyC2bXYi.allowance.call(addressPI3xF8b, addressqbAbzNQ, {from: accounts[0]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addresstgWAHQA, addressryD3oLG, {from: accounts[5]});
		const uint256IncIeqh = await AntiBaseProtocolyC2bXYi.balanceOf.call(addressHe9QAyC, {from: accounts[4]});
		const addressDK9L4dz = await AntiBaseProtocolyC2bXYi._burnFrom.call(addressmsKWMaI, uintlsbpPb6, {from: accounts[1]});

		assert.equal(uint256Cfv7kBN, BigInt("0"))
		assert.equal(uint256IncIeqh, BigInt("31250000000000000000"))
		assert.equal(uint256QrvQYwv, BigInt("0"))
		await expect(AntiBaseProtocolyC2bXYi._burnFrom.call(addressmsKWMaI, uintlsbpPb6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintscHh2QU = BigInt("1265")
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256uLRwMoI = await AntiBaseProtocolyC2bXYi.findBurnFee.call(uintscHh2QU, {from: accounts[4]});

		assert.equal(uint256uLRwMoI, BigInt("195"))
		assert.equal(uint8aRfS3Z, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uinttqDPpNs = BigInt("1895")
		const addressW7rTEVc = accounts[3]
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJor83Qm = await AntiBaseProtocolyC2bXYi.approve.call(addressW7rTEVc, uinttqDPpNs, {from: accounts[0]});

		assert.equal(boolJor83Qm, true)
		assert.equal(uint8aRfS3Z, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintXVF8dVT = BigInt("1406")
		const address7kPoG5 = accounts[4]
		const uintjxYPeaM = BigInt("870")
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolh0kc1L0 = await AntiBaseProtocolyC2bXYi.transfer.call(address7kPoG5, uintXVF8dVT, {from: accounts[5]});
		const uint256uLRwMoI = await AntiBaseProtocolyC2bXYi.findBurnFee.call(uintjxYPeaM, {from: accounts[4]});

		assert.equal(uint8aRfS3Z, BigInt("18"))
		await expect(AntiBaseProtocolyC2bXYi.transfer.call(address7kPoG5, uintXVF8dVT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintr1KNfyr = BigInt("246")
		const addressmYl0vc5 = accounts[4]
		const addressx401k7M = accounts[0]
		const booluUt9k8 = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressx401k7M, addressmYl0vc5, uintr1KNfyr, {from: accounts[0]});
		const uint8FQPvXJ3 = await AntiBaseProtocolyC2bXYi.decimals.call({from: accounts[2]});

		await expect(AntiBaseProtocolyC2bXYi.transferFrom.call(addressx401k7M, addressmYl0vc5, uintr1KNfyr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwocmhcp = BigInt("194")
		const addressYgSUMKE = accounts[0]
		const addressRb0lCeA = await AntiBaseProtocolyC2bXYi.burnFrom.call(addressYgSUMKE, uintwocmhcp, {from: accounts[3]});
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolyC2bXYi.burnFrom.call(addressYgSUMKE, uintwocmhcp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintG6HPJ4a = BigInt("2015")
		const addressXZ71koR = accounts[2]
		const uinthI9jZzE = BigInt("539")
		const addressmpxJSWe = accounts[4]
		const addressD5DbUwR = accounts[1]
		const addressqSl7Uv7 = accounts[1]
		const boolzmpUReO = await AntiBaseProtocolyC2bXYi.approve.call(addressXZ71koR, uintG6HPJ4a, {from: accounts[0]});
		const addressB8YXcj8 = await AntiBaseProtocolyC2bXYi.owner.call({from: accounts[4]});
		const addressrcw7D3l = await AntiBaseProtocolyC2bXYi._mint.call(addressmpxJSWe, uinthI9jZzE, {from: accounts[5]});
		const uint256QrvQYwv = await AntiBaseProtocolyC2bXYi.allowance.call(addressqSl7Uv7, addressD5DbUwR, {from: accounts[5]});

		assert.equal(addressB8YXcj8, 0xD0A5bF83DF18Bf8BD6dB45784fcb307EF926F24f)
		assert.equal(boolzmpUReO, true)
		await expect(AntiBaseProtocolyC2bXYi._mint.call(addressmpxJSWe, uinthI9jZzE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintTWGQko = BigInt("705")
		const addressphxdNEr = accounts[2]
		const addressHL6rIty = accounts[4]
		const boolnYlBnb = await AntiBaseProtocolyC2bXYi.increaseAllowance.call(addressphxdNEr, uintTWGQko, {from: accounts[0]});
		const addresstyAi0rA = await AntiBaseProtocolyC2bXYi.transferOwnership.call(addressHL6rIty, {from: accounts[0]});
		const uint8aRfS3Z = await AntiBaseProtocolyC2bXYi.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnYlBnb, true)
		assert.equal(uint8aRfS3Z, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyC2bXYi = await AntiBaseProtocol.new({from: accounts[0]});
		const uintUhk0A2c = BigInt("116")
		const addressZcx8bcn = accounts[4]
		const addressxxLhW7Y = accounts[0]
		const uintnQkDM8R = BigInt("1697")
		const addressVuajmDg = accounts[5]
		const addressF5YXD7Y = accounts[3]
		const uintcLHqqwN = BigInt("1760")
		const addressVlKS1c9 = accounts[3]
		const addressN0llNk = "0x0000000000000000000000000000000000000001"
		const stringIC052Pn = await AntiBaseProtocolyC2bXYi.symbol.call({from: accounts[0]});
		const booluUt9k8 = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressxxLhW7Y, addressZcx8bcn, uintUhk0A2c, {from: accounts[0]});
		const addressoyHPm3u = await AntiBaseProtocolyC2bXYi._approve.call(addressF5YXD7Y, addressVuajmDg, uintnQkDM8R, {from: accounts[0]});
		const boolU9lveIW = await AntiBaseProtocolyC2bXYi.transferFrom.call(addressN0llNk, addressVlKS1c9, uintcLHqqwN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringIC052Pn, "ABASE")
		await expect(AntiBaseProtocolyC2bXYi.transferFrom.call(addressxxLhW7Y, addressZcx8bcn, uintUhk0A2c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})