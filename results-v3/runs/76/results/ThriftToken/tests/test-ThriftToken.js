const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenIM3i04T = await ThriftToken.new({from: accounts[2]});
		const uintFKgAIpt = BigInt("1117")
		const addresseDLXV71 = accounts[1]
		const uintzhFZMLz = BigInt("1214")
		const addressaUec5XB = accounts[1]
		const addressGD22M5Z = accounts[4]
		const uintytcbAWo = BigInt("77")
		const addressp5WsN1x = accounts[4]
		const addressD47b9d8 = accounts[0]
		const uintRCz1ixN = BigInt("1852")
		const addressix5fJBe = accounts[3]
		const addressgNjmxdm = accounts[4]
		const uintNtWPviX = BigInt("1237")
		const addressBBZqTo0 = accounts[2]
		const boolm2ukSZx = await ThriftTokenIM3i04T.transfer.call(addresseDLXV71, uintFKgAIpt, {from: accounts[1]});
		const boolYZrhRAf = await ThriftTokenIM3i04T.transferFrom.call(addressGD22M5Z, addressaUec5XB, uintzhFZMLz, {from: accounts[2]});
		const boolVSF6555 = await ThriftTokenIM3i04T.transferFrom.call(addressD47b9d8, addressp5WsN1x, uintytcbAWo, {from: accounts[0]});
		const boolDBda2RI = await ThriftTokenIM3i04T.decreaseApproval.call(addressix5fJBe, uintRCz1ixN, {from: accounts[2]});
		const uint256f6GtyL = await ThriftTokenIM3i04T.balanceOf.call(addressgNjmxdm, {from: accounts[3]});
		const booltkHi2o = await ThriftTokenIM3i04T.approve.call(addressBBZqTo0, uintNtWPviX, {from: accounts[0]});

		await expect(ThriftTokenIM3i04T.transfer.call(addresseDLXV71, uintFKgAIpt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenr83Y5hK = await ThriftToken.new({from: accounts[2]});
		const address8mdzkb = accounts[4]
		const uintY7zGaTu = BigInt("361")
		const addressg9C3cWT = accounts[0]
		const uintdffoBpB = BigInt("632")
		const addressolAObTe = accounts[3]
		const addressGiGPGRQ = "0x0000000000000000000000000000000000000001"
		const address8RabqX = accounts[3]
		const uint256ewWm6Ie = await ThriftTokenr83Y5hK.transferableTokens.call(address8mdzkb, {from: accounts[2]});
		const booleNH6h5E = await ThriftTokenr83Y5hK.increaseApproval.call(addressg9C3cWT, uintY7zGaTu, {from: accounts[1]});
		const boolwpJlyp = await ThriftTokenr83Y5hK.transferFrom.call(addressGiGPGRQ, addressolAObTe, uintdffoBpB, {from: accounts[1]});
		const uint256yh8u6FY = await ThriftTokenr83Y5hK.balanceOf.call(address8RabqX, {from: accounts[4]});

		assert.equal(booleNH6h5E, true)
		assert.equal(uint256ewWm6Ie, BigInt("0"))
		await expect(ThriftTokenr83Y5hK.transferFrom.call(addressGiGPGRQ, addressolAObTe, uintdffoBpB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokendqUTZTQ = await ThriftToken.new({from: accounts[0]});
		const addressZchepIe = accounts[1]
		const uintprQAVQW = BigInt("1260")
		const addresszRoYvUL = accounts[2]
		const addressuFnlt4 = accounts[2]
		const uint256GwErgJx = await ThriftTokendqUTZTQ.balanceOf.call(addressZchepIe, {from: "0x0000000000000000000000000000000000000001"});
		const boolJFakPJO = await ThriftTokendqUTZTQ.decreaseApproval.call(addresszRoYvUL, uintprQAVQW, {from: accounts[1]});
		const addressM70Zq1H = await ThriftTokendqUTZTQ.transferOwnership.call(addressuFnlt4, {from: accounts[0]});

		assert.equal(boolJFakPJO, true)
		assert.equal(uint256GwErgJx, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenGQb3ASn = await ThriftToken.new({from: accounts[4]});
		const addressy8bB5TQ = accounts[2]
		const addressb2mNon = "0x0000000000000000000000000000000000000001"
		const addressCWmm2BL = accounts[1]
		const uintIFXC6TK = BigInt("1794")
		const addressvGJgn9l = accounts[4]
		const addressSg5tla = accounts[2]
		const uintv9aamAn = BigInt("771")
		const addressIb3BWIw = accounts[0]
		const addressNNVvwjm = accounts[2]
		const uinteGG2Vph = BigInt("594")
		const addressmGFJw6L = accounts[3]
		const uint256AmQTYiz = await ThriftTokenGQb3ASn.allowance.call(addressb2mNon, addressy8bB5TQ, {from: accounts[1]});
		const uint256oVCGjP6 = await ThriftTokenGQb3ASn.balanceOf.call(addressCWmm2BL, {from: accounts[3]});
		const booldeuQj2g = await ThriftTokenGQb3ASn.transferFrom.call(addressSg5tla, addressvGJgn9l, uintIFXC6TK, {from: accounts[3]});
		const boolPFeyEB4 = await ThriftTokenGQb3ASn.transferFrom.call(addressNNVvwjm, addressIb3BWIw, uintv9aamAn, {from: accounts[2]});
		const boolYmACC4Z = await ThriftTokenGQb3ASn.approve.call(addressmGFJw6L, uinteGG2Vph, {from: accounts[1]});

		assert.equal(uint256AmQTYiz, BigInt("0"))
		assert.equal(uint256oVCGjP6, BigInt("0"))
		await expect(ThriftTokenGQb3ASn.transferFrom.call(addressSg5tla, addressvGJgn9l, uintIFXC6TK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeneOxB1lW = await ThriftToken.new({from: accounts[5]});
		const addressaQq7mUo = accounts[2]
		const addressIMsa4RN = accounts[5]
		const uintgU8yHNv = BigInt("113")
		const addressz5kE0dk = accounts[0]
		const uintqtpXhrZ = BigInt("1940")
		const addressGnsRYRu = accounts[2]
		const address3sENAC = accounts[4]
		const uintAJdQgMT = BigInt("1802")
		const addressfsvfoFI = "0x0000000000000000000000000000000000000001"
		const uint256ueumWki = await ThriftTokeneOxB1lW.allowance.call(addressIMsa4RN, addressaQq7mUo, {from: accounts[4]});
		const boolaK5ndEv = await ThriftTokeneOxB1lW.transfer.call(addressz5kE0dk, uintgU8yHNv, {from: accounts[4]});
		const boologQSdXu = await ThriftTokeneOxB1lW.transfer.call(addressGnsRYRu, uintqtpXhrZ, {from: accounts[1]});
		const uint256Fnqjpy = await ThriftTokeneOxB1lW.balanceOf.call(address3sENAC, {from: accounts[1]});
		const booludh7Usz = await ThriftTokeneOxB1lW.transfer.call(addressfsvfoFI, uintAJdQgMT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ueumWki, BigInt("0"))
		await expect(ThriftTokeneOxB1lW.transfer.call(addressz5kE0dk, uintgU8yHNv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenr83Y5hK = await ThriftToken.new({from: accounts[2]});
		const uintdVhqd1b = BigInt("426")
		const addresswa2lhNU = accounts[0]
		const uintNAfVsaJ = BigInt("329")
		const addressainGqeL = accounts[4]
		const addressS79O4KV = accounts[4]
		const uintVMXKGuH = BigInt("391")
		const addressCjpH3Q = accounts[0]
		const uintV8KjnTd = BigInt("632")
		const address9eqxUW = accounts[3]
		const addressRmrH84 = "0x0000000000000000000000000000000000000001"
		const addressmtXkrkj = accounts[3]
		const boolfl4EHwy = await ThriftTokenr83Y5hK.approve.call(addresswa2lhNU, uintdVhqd1b, {from: "0x0000000000000000000000000000000000000001"});
		const boolc9rYHmc = await ThriftTokenr83Y5hK.approve.call(addressainGqeL, uintNAfVsaJ, {from: accounts[5]});
		const uint256ewWm6Ie = await ThriftTokenr83Y5hK.transferableTokens.call(addressS79O4KV, {from: accounts[2]});
		const booleNH6h5E = await ThriftTokenr83Y5hK.increaseApproval.call(addressCjpH3Q, uintVMXKGuH, {from: accounts[1]});
		const boolwpJlyp = await ThriftTokenr83Y5hK.transferFrom.call(addressRmrH84, address9eqxUW, uintV8KjnTd, {from: accounts[1]});
		const uint256yh8u6FY = await ThriftTokenr83Y5hK.balanceOf.call(addressmtXkrkj, {from: accounts[4]});

		assert.equal(boolc9rYHmc, true)
		assert.equal(booleNH6h5E, true)
		assert.equal(boolfl4EHwy, true)
		assert.equal(uint256ewWm6Ie, BigInt("0"))
		await expect(ThriftTokenr83Y5hK.transferFrom.call(addressRmrH84, address9eqxUW, uintV8KjnTd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenUgAgsXm = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfkAvc3U = BigInt("1461")
		const addressx0FYMU = accounts[3]
		const uintZNbTSaA = BigInt("1525")
		const addresshSN13Q6 = accounts[5]
		const addressYOMfxfa = accounts[0]
		const boolu54J6KE = await ThriftTokenUgAgsXm.transfer.call(addressx0FYMU, uintfkAvc3U, {from: accounts[2]});
		const boolpxCLXek = await ThriftTokenUgAgsXm.transferFrom.call(addressYOMfxfa, addresshSN13Q6, uintZNbTSaA, {from: accounts[1]});
	});
})