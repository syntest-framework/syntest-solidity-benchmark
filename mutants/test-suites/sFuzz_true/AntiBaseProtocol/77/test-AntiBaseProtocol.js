const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const uint8QlTTRjN = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[1]});
		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});

		assert.equal(uint8QlTTRjN, BigInt("18"))
		assert.equal(uint8coskZ3, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOUvOJdt = await AntiBaseProtocol.new({from: accounts[3]});
		const uintJQGOg0 = BigInt("378")
		const addresswdQ3nOY = accounts[4]
//		await AntiBaseProtocolOUvOJdt.onlyOwner.call({from: accounts[1]});
//		const boolfzbqH0Y = await AntiBaseProtocolOUvOJdt.isOwner.call({from: accounts[2]});
//		const addressosrSFhO = await AntiBaseProtocolOUvOJdt.burnFrom.call(addresswdQ3nOY, uintJQGOg0, {from: accounts[2]});
//		const uint8sspCxg = await AntiBaseProtocolOUvOJdt.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolOUvOJdt.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintszYXhGW = BigInt("1027")
		const uintTAWQuZz = BigInt("785")
		const addressUgNfXbw = accounts[1]
		const addressame9eQG = accounts[3]
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintszYXhGW, {from: accounts[0]});
//		await AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]});
//		const boolC59EqJZ = await AntiBaseProtocoleK40wi8.decreaseAllowance.call(addressUgNfXbw, uintTAWQuZz, {from: accounts[4]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addressame9eQG, {from: accounts[1]});
//		const uint256oVaMTdQ = await AntiBaseProtocoleK40wi8.totalSupply.call({from: accounts[1]});

		assert.equal(uint256BsbyrmL, BigInt("165"))
		await expect(AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolpSFT8De = await AntiBaseProtocol.new({from: accounts[0]});
		const addressendfWIH = accounts[3]
		const uint256Y5jXYTt = await AntiBaseProtocolpSFT8De.balanceOf.call(addressendfWIH, {from: accounts[4]});
		const stringSgT0I0g = await AntiBaseProtocolpSFT8De.symbol.call({from: accounts[0]});

		assert.equal(stringSgT0I0g, "ABASE")
		assert.equal(uint256Y5jXYTt, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const stringu8VU42C = "33O5xCXeac6HrCzTNgRDUK4EewttonhntYkIR8jT67gGFIxEmPNhg6OfDEN4EjLJ9RYA8j"
		const stringcev166b = "loNZT"
		const uintSsyDKbL = BigInt("222")
		const AntiBaseProtocolfEfumOw = await AntiBaseProtocol.new(stringu8VU42C, stringcev166b, uintSsyDKbL, {from: "0x0000000000000000000000000000000000000001"});
		const uintAkyOcjM = BigInt("968")
		const addressBogHh0q = accounts[2]
		const addressKzMZgb = accounts[4]
		const addressqPc8KKj = accounts[0]
		const addressbzY3Gko = accounts[1]
		const bool6oogs7 = await AntiBaseProtocolfEfumOw.increaseAllowance.call(addressBogHh0q, uintAkyOcjM, {from: accounts[1]});
		const uint256vySZZuh = await AntiBaseProtocolfEfumOw.totalSupply.call({from: accounts[0]});
		const addresslHDLhKQ = await AntiBaseProtocolfEfumOw._transferOwnership.call(addressKzMZgb, {from: accounts[3]});
		const uint256DrCZ9Tc = await AntiBaseProtocolfEfumOw.allowance.call(addressbzY3Gko, addressqPc8KKj, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOH8qqrs = await AntiBaseProtocol.new({from: accounts[4]});
		const uintI8M7g1c = BigInt("710")
		const addressM365YbD = accounts[2]
		const addressPPDTcR = accounts[0]
		const addressSZ2AWfC = accounts[5]
//		const boolepuKP2x = await AntiBaseProtocolOH8qqrs.decreaseAllowance.call(addressM365YbD, uintI8M7g1c, {from: accounts[2]});
//		await AntiBaseProtocolOH8qqrs.onlyOwner.call({from: accounts[3]});
//		const uint256fQl8O5 = await AntiBaseProtocolOH8qqrs.allowance.call(addressSZ2AWfC, addressPPDTcR, {from: accounts[0]});

		await expect(AntiBaseProtocolOH8qqrs.decreaseAllowance.call(addressM365YbD, uintI8M7g1c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintWKL6MUQ = BigInt("1021")
		const uintcJGVRrW = BigInt("785")
		const addressYo3DUby = accounts[1]
		const addressRNeGh2n = accounts[3]
		const uint256O4k1Gdj = await AntiBaseProtocoleK40wi8.totalSupply.call({from: accounts[3]});
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintWKL6MUQ, {from: accounts[0]});
//		await AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]});
//		const boolC59EqJZ = await AntiBaseProtocoleK40wi8.decreaseAllowance.call(addressYo3DUby, uintcJGVRrW, {from: accounts[4]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addressRNeGh2n, {from: accounts[1]});
//		const uint256oVaMTdQ = await AntiBaseProtocoleK40wi8.totalSupply.call({from: accounts[1]});

		assert.equal(uint256BsbyrmL, BigInt("165"))
		assert.equal(uint256O4k1Gdj, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintflmZFvb = BigInt("1027")
		const uinthZqyVhL = BigInt("776")
		const uintkIyrB2x = BigInt("785")
		const addresskHOxf7t = accounts[2]
		const addresszYZLjE = accounts[3]
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintflmZFvb, {from: accounts[0]});
		const stringH6XIL9 = await AntiBaseProtocoleK40wi8.symbol.call({from: accounts[4]});
//		const uint256l0TxYl = await AntiBaseProtocoleK40wi8.burn.call(uinthZqyVhL, {from: accounts[0]});
//		const boolC59EqJZ = await AntiBaseProtocoleK40wi8.decreaseAllowance.call(addresskHOxf7t, uintkIyrB2x, {from: accounts[4]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addresszYZLjE, {from: accounts[1]});
//		const uint256oVaMTdQ = await AntiBaseProtocoleK40wi8.totalSupply.call({from: accounts[1]});

		assert.equal(stringH6XIL9, "ABASE")
		assert.equal(uint256BsbyrmL, BigInt("165"))
		await expect(AntiBaseProtocoleK40wi8.burn.call(uinthZqyVhL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const stringJ6JctnY = await AntiBaseProtocolfYZxrZT.name.call({from: accounts[2]});
		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});

		assert.equal(stringJ6JctnY, "https://t.me/antibaseprotocol")
		assert.equal(uint8coskZ3, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const uintD7TloQ4 = BigInt("2042")
		const addressmmobGk = accounts[4]
		const boolygiLdL = await AntiBaseProtocolfYZxrZT.isOwner.call({from: accounts[5]});
//		const boolde9KTT = await AntiBaseProtocolfYZxrZT.decreaseAllowance.call(addressmmobGk, uintD7TloQ4, {from: accounts[3]});
//		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});
//		const stringzllNTFG = await AntiBaseProtocolfYZxrZT.symbol.call({from: accounts[1]});

		assert.equal(boolygiLdL, false)
		await expect(AntiBaseProtocolfYZxrZT.decreaseAllowance.call(addressmmobGk, uintD7TloQ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolLc8QiVN = await AntiBaseProtocol.new({from: accounts[3]});
		const uintciU0iM7 = BigInt("972")
		const addressFmZeB7n = accounts[4]
		const uintcWqBYef = BigInt("1919")
		const addressmOS4Qg3 = accounts[2]
		const uint6Tr5b9 = BigInt("1706")
		const addressfrK7Juq = accounts[2]
		const uintsKaDcbp = BigInt("635")
		const addressO57U93v = "0x0000000000000000000000000000000000000001"
		const boolBGKbPPX = await AntiBaseProtocolLc8QiVN.approve.call(addressFmZeB7n, uintciU0iM7, {from: accounts[2]});
//		const boollbwZllF = await AntiBaseProtocolLc8QiVN.decreaseAllowance.call(addressmOS4Qg3, uintcWqBYef, {from: accounts[1]});
//		await AntiBaseProtocolLc8QiVN.requestGas.call({from: accounts[0]});
//		const booluwr1rTP = await AntiBaseProtocolLc8QiVN.approve.call(addressfrK7Juq, uint6Tr5b9, {from: accounts[1]});
//		const addressqgD6jJd = await AntiBaseProtocolLc8QiVN.burnFrom.call(addressO57U93v, uintsKaDcbp, {from: accounts[3]});

		assert.equal(boolBGKbPPX, true)
		await expect(AntiBaseProtocolLc8QiVN.decreaseAllowance.call(addressmOS4Qg3, uintcWqBYef, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const addressfWUSggR = accounts[5]
		const addressR0CSQCi = "0x0000000000000000000000000000000000000001"
		const uintBKchANA = BigInt("1027")
		const addressmsSXJI2 = accounts[3]
		const uint256BHA9Z0I = await AntiBaseProtocoleK40wi8.allowance.call(addressR0CSQCi, addressfWUSggR, {from: accounts[4]});
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintBKchANA, {from: accounts[0]});
//		await AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addressmsSXJI2, {from: accounts[1]});

		assert.equal(uint256BHA9Z0I, BigInt("0"))
		assert.equal(uint256BsbyrmL, BigInt("165"))
		await expect(AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const addresshrBMyWj = accounts[5]
		const uintOdL9oL = BigInt("1647")
		const addressTweIct = accounts[0]
		const uint256T0IKsBR = await AntiBaseProtocolfYZxrZT.balanceOf.call(addresshrBMyWj, {from: accounts[1]});
//		const boolFE6YSa0 = await AntiBaseProtocolfYZxrZT.transfer.call(addressTweIct, uintOdL9oL, {from: accounts[3]});
//		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});
//		await AntiBaseProtocolfYZxrZT.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256T0IKsBR, BigInt("0"))
		await expect(AntiBaseProtocolfYZxrZT.transfer.call(addressTweIct, uintOdL9oL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const uintXopFP5F = BigInt("1100")
		const addresspd5kcd6 = await AntiBaseProtocolfYZxrZT.owner.call({from: accounts[3]});
		const uint256wpUGWSd = await AntiBaseProtocolfYZxrZT.findRewardFee.call(uintXopFP5F, {from: accounts[1]});
		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});

		assert.equal(addresspd5kcd6, 0xF9558859c73327132c09496147166b5769757E1f)
		assert.equal(uint256wpUGWSd, BigInt("55"))
		assert.equal(uint8coskZ3, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolvslHlV8 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintJHyzaL = BigInt("595")
		const addresssMXWlP8 = accounts[3]
		const uintai3B6C = BigInt("1887")
		const addressi5zZVhd = accounts[4]
//		const addressWcNne69 = await AntiBaseProtocolvslHlV8.burnFrom.call(addresssMXWlP8, uintJHyzaL, {from: accounts[2]});
//		const uint256I7vaiGi = await AntiBaseProtocolvslHlV8.findBurnFee.call(uintai3B6C, {from: accounts[3]});
//		await AntiBaseProtocolvslHlV8.requestGas.call({from: accounts[0]});
//		const addressa9epPrf = await AntiBaseProtocolvslHlV8.transferOwnership.call(addressi5zZVhd, {from: accounts[3]});

		await expect(AntiBaseProtocolvslHlV8.burnFrom.call(addresssMXWlP8, uintJHyzaL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const addressmaej1W5 = accounts[5]
		const uint256T0IKsBR = await AntiBaseProtocolfYZxrZT.balanceOf.call(addressmaej1W5, {from: accounts[1]});
		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});
//		await AntiBaseProtocolfYZxrZT.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256T0IKsBR, BigInt("0"))
		assert.equal(uint8coskZ3, BigInt("18"))
		await expect(AntiBaseProtocolfYZxrZT.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintb32bmvN = BigInt("1027")
		const uintXBJYz89 = BigInt("901")
		const addressKBQZ0Hx = accounts[4]
		const uintZ6wqfyc = BigInt("1310")
		const addresskLP4f5V = accounts[3]
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintb32bmvN, {from: accounts[0]});
		const boolr9TtXCY = await AntiBaseProtocoleK40wi8.increaseAllowance.call(addressKBQZ0Hx, uintXBJYz89, {from: "0x0000000000000000000000000000000000000001"});
//		await AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]});
//		const uint256p49w3kq = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintZ6wqfyc, {from: accounts[5]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addresskLP4f5V, {from: accounts[1]});

		assert.equal(boolr9TtXCY, true)
		assert.equal(uint256BsbyrmL, BigInt("165"))
		await expect(AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintQPrWgIA = BigInt("1536")
		const addressyFVbDmT = accounts[3]
		const uinthpPaJCn = BigInt("1027")
		const addressvqJUlvY = accounts[3]
//		const addressuKmes0a = await AntiBaseProtocoleK40wi8.burnFrom.call(addressyFVbDmT, uintQPrWgIA, {from: accounts[4]});
//		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uinthpPaJCn, {from: accounts[0]});
//		const addressmnrgb9h = await AntiBaseProtocoleK40wi8.transferOwnership.call(addressvqJUlvY, {from: accounts[1]});

		await expect(AntiBaseProtocoleK40wi8.burnFrom.call(addressyFVbDmT, uintQPrWgIA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintSqHvyQW = BigInt("1027")
		const uinttAGoWC2 = BigInt("981")
		const addressBv9066D = accounts[3]
		const addresszTlUat4 = accounts[1]
		const addressneNWMEW = accounts[2]
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintSqHvyQW, {from: accounts[0]});
//		const boolvKpxgIg = await AntiBaseProtocoleK40wi8.transferFrom.call(addresszTlUat4, addressBv9066D, uinttAGoWC2, {from: "0x0000000000000000000000000000000000000001"});
//		const addressSFvxUMI = await AntiBaseProtocoleK40wi8._transferOwnership.call(addressneNWMEW, {from: accounts[3]});
//		await AntiBaseProtocoleK40wi8.requestGas.call({from: accounts[1]});

		assert.equal(uint256BsbyrmL, BigInt("165"))
		await expect(AntiBaseProtocoleK40wi8.transferFrom.call(addresszTlUat4, addressBv9066D, uinttAGoWC2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintEBtRpg = BigInt("11")
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintEBtRpg, {from: accounts[0]});
//		await AntiBaseProtocoleK40wi8.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256BsbyrmL, BigInt("15"))
		await expect(AntiBaseProtocoleK40wi8.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleK40wi8 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintmbLL83 = BigInt("0")
		const uintbi38jJS = BigInt("673")
		const addresswMJcxFu = accounts[4]
		const uint256BsbyrmL = await AntiBaseProtocoleK40wi8.findBurnFee.call(uintmbLL83, {from: accounts[0]});
//		const boolvg9LJu3 = await AntiBaseProtocoleK40wi8.decreaseAllowance.call(addresswMJcxFu, uintbi38jJS, {from: accounts[2]});

		assert.equal(uint256BsbyrmL, BigInt("0"))
		await expect(AntiBaseProtocoleK40wi8.decreaseAllowance.call(addresswMJcxFu, uintbi38jJS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqerjr1i = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBuc6b8H = accounts[3]
		const stringplrwy4f = await AntiBaseProtocolqerjr1i.symbol.call({from: accounts[2]});
		const boolKtUB0ph = await AntiBaseProtocolqerjr1i.isOwner.call({from: accounts[3]});
		const addressxebANp = await AntiBaseProtocolqerjr1i._transferOwnership.call(addressBuc6b8H, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const uintlquEt4i = BigInt("1941")
		const addresswUnjeAW = "0x00000000000000000000000000000000000000-1"
//		const boolZDmQk0 = await AntiBaseProtocolfYZxrZT.transfer.call(addresswUnjeAW, uintlquEt4i, {from: accounts[4]});

		await expect(AntiBaseProtocolfYZxrZT.transfer.call(addresswUnjeAW, uintlquEt4i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const uintiCBq69c = BigInt("548")
		const addresslH6uvX = "0x0000000000000000000000000000000000000001"
		const addresscWi2zZc = accounts[0]
		const uintyNqe1LI = BigInt("1230")
		const addressxmwdnz9 = accounts[2]
//		const boolhSVABwH = await AntiBaseProtocolfYZxrZT.transferFrom.call(addresscWi2zZc, addresslH6uvX, uintiCBq69c, {from: accounts[4]});
//		const boolodI1TJB = await AntiBaseProtocolfYZxrZT.transfer.call(addressxmwdnz9, uintyNqe1LI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolfYZxrZT.transferFrom.call(addresscWi2zZc, addresslH6uvX, uintiCBq69c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfYZxrZT = await AntiBaseProtocol.new({from: accounts[0]});
		const addressJxpa0XA = accounts[0]
		const uintxTPU4li = BigInt("369")
		const addressKCc44K8 = accounts[0]
		const addressqMQXiT9 = await AntiBaseProtocolfYZxrZT.transferOwnership.call(addressJxpa0XA, {from: accounts[0]});
//		const bool0255nY = await AntiBaseProtocolfYZxrZT.transfer.call(addressKCc44K8, uintxTPU4li, {from: accounts[2]});
//		const uint8coskZ3 = await AntiBaseProtocolfYZxrZT.decimals.call({from: accounts[4]});

		await expect(AntiBaseProtocolfYZxrZT.transfer.call(addressKCc44K8, uintxTPU4li, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})