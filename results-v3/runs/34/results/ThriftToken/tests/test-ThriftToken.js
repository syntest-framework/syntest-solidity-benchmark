const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenPNrbr2f = await ThriftToken.new({from: accounts[0]});
		const uintNjBSAQY = BigInt("1615")
		const addressc0eCXd7 = accounts[1]
		const uintztL87aX = BigInt("871")
		const addressmRp8HEK = "0x0000000000000000000000000000000000000001"
		const uintBXggRIo = BigInt("299")
		const addressdTcGOBe = accounts[4]
		const addressJm0lVvk = accounts[2]
		const addressLRHkt4O = accounts[2]
		const addressPVv6TMX = accounts[3]
		const address0PlrY7 = accounts[4]
		const addressUo6Y20v = accounts[1]
		const addressCnS1uKg = accounts[0]
		const bools1PXlk8 = await ThriftTokenPNrbr2f.increaseApproval.call(addressc0eCXd7, uintNjBSAQY, {from: accounts[4]});
		const boolJ25qURy = await ThriftTokenPNrbr2f.increaseApproval.call(addressmRp8HEK, uintztL87aX, {from: accounts[2]});
		const boolPs6Rsmp = await ThriftTokenPNrbr2f.transferFrom.call(addressJm0lVvk, addressdTcGOBe, uintBXggRIo, {from: accounts[3]});
		const uint256QIT3jXj = await ThriftTokenPNrbr2f.allowance.call(addressPVv6TMX, addressLRHkt4O, {from: accounts[2]});
		const addressMWexfdQ = await ThriftTokenPNrbr2f.transferOwnership.call(address0PlrY7, {from: accounts[4]});
		const uint256zhaDawj = await ThriftTokenPNrbr2f.allowance.call(addressCnS1uKg, addressUo6Y20v, {from: accounts[1]});

		assert.equal(boolJ25qURy, true)
		assert.equal(bools1PXlk8, true)
		await expect(ThriftTokenPNrbr2f.transferFrom.call(addressJm0lVvk, addressdTcGOBe, uintBXggRIo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokene1AKh0r = await ThriftToken.new({from: accounts[0]});
		const addressJucJrp0 = accounts[2]
		const addressbO6UzpR = accounts[3]
		const uintYOjfhHU = BigInt("225")
		const addressQTQtOn1 = accounts[1]
		const uintyz2ldBQ = BigInt("616")
		const addressCFTN94h = accounts[2]
		const addressLgAXEt = accounts[1]
		const addressyqbBXAb = accounts[3]
		const uint256Ll4XhOS = await ThriftTokene1AKh0r.balanceOf.call(addressJucJrp0, {from: accounts[4]});
		const addressiK8KLGL = await ThriftTokene1AKh0r.transferOwnership.call(addressbO6UzpR, {from: accounts[0]});
		const boolOKmATF8 = await ThriftTokene1AKh0r.transfer.call(addressQTQtOn1, uintYOjfhHU, {from: accounts[4]});
		const boolvOJhazI = await ThriftTokene1AKh0r.transferFrom.call(addressLgAXEt, addressCFTN94h, uintyz2ldBQ, {from: accounts[1]});
		const addressrxQvNms = await ThriftTokene1AKh0r.transferOwnership.call(addressyqbBXAb, {from: accounts[0]});

		assert.equal(uint256Ll4XhOS, BigInt("0"))
		await expect(ThriftTokene1AKh0r.transfer.call(addressQTQtOn1, uintYOjfhHU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenJeRRin = await ThriftToken.new({from: accounts[2]});
		const uintCNZqIc = BigInt("630")
		const addressSGavl8d = accounts[3]
		const uintvFCSrA3 = BigInt("1622")
		const addressK0YsV9h = accounts[4]
		const addresskjTPAK0 = accounts[5]
		const addressQGa0cq1 = accounts[0]
		const booldyVLogL = await ThriftTokenJeRRin.decreaseApproval.call(addressSGavl8d, uintCNZqIc, {from: accounts[3]});
		const boolaPgbAXL = await ThriftTokenJeRRin.approve.call(addressK0YsV9h, uintvFCSrA3, {from: accounts[2]});
		const uint256CyhSipX = await ThriftTokenJeRRin.allowance.call(addressQGa0cq1, addresskjTPAK0, {from: accounts[2]});

		await expect(ThriftTokenJeRRin.decreaseApproval.call(addressSGavl8d, uintCNZqIc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenak65bfS = await ThriftToken.new({from: accounts[1]});
		const uinticmzRq6 = BigInt("1178")
		const addressoAKJ2eR = accounts[0]
		const addressmas3Cc7 = "0x0000000000000000000000000000000000000001"
		const boolscoSbOV = await ThriftTokenak65bfS.decreaseApproval.call(addressoAKJ2eR, uinticmzRq6, {from: accounts[3]});
		const addressY1UtaN2 = await ThriftTokenak65bfS.transferOwnership.call(addressmas3Cc7, {from: accounts[0]});

		assert.equal(boolscoSbOV, true)
		await expect(ThriftTokenak65bfS.transferOwnership.call(addressmas3Cc7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenak65bfS = await ThriftToken.new({from: accounts[1]});
		const uintmqpIlz = BigInt("1178")
		const addressqr4NOSZ = accounts[0]
		const uintPwLHeQp = BigInt("1795")
		const addressbOSqbmi = "0x0000000000000000000000000000000000000001"
		const addressoh1Cm72 = accounts[4]
		const addresshzpGyPR = accounts[5]
		const boolscoSbOV = await ThriftTokenak65bfS.decreaseApproval.call(addressqr4NOSZ, uintmqpIlz, {from: accounts[3]});
		const boolvj66go = await ThriftTokenak65bfS.increaseApproval.call(addressbOSqbmi, uintPwLHeQp, {from: accounts[1]});
		const uint256nvnDKXj = await ThriftTokenak65bfS.allowance.call(addresshzpGyPR, addressoh1Cm72, {from: accounts[5]});

		assert.equal(boolscoSbOV, true)
		assert.equal(boolvj66go, true)
		assert.equal(uint256nvnDKXj, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenvbA4lTe = await ThriftToken.new({from: accounts[4]});
		const uintAiJGyxO = BigInt("1515")
		const addressaWmH9MK = accounts[3]
		const uintUs42tIc = BigInt("496")
		const addresstHCvXHF = accounts[3]
		const addressxZb03Rd = accounts[3]
		const uintPhWGHA = BigInt("1644")
		const addressRBIszu = "0x0000000000000000000000000000000000000001"
		const addressJaXBzjv = accounts[2]
		const uintfD9PE07 = BigInt("1067")
		const addressdhwZNBj = accounts[0]
		const addressKZt5gkk = accounts[1]
		const boolS44rFG = await ThriftTokenvbA4lTe.approve.call(addressaWmH9MK, uintAiJGyxO, {from: accounts[2]});
		const boolbcpfswN = await ThriftTokenvbA4lTe.transferFrom.call(addressxZb03Rd, addresstHCvXHF, uintUs42tIc, {from: accounts[1]});
		const boolAWr8Ffu = await ThriftTokenvbA4lTe.transferFrom.call(addressJaXBzjv, addressRBIszu, uintPhWGHA, {from: accounts[5]});
		const boolXEc0heG = await ThriftTokenvbA4lTe.transferFrom.call(addressKZt5gkk, addressdhwZNBj, uintfD9PE07, {from: accounts[4]});

		assert.equal(boolS44rFG, true)
		await expect(ThriftTokenvbA4lTe.transferFrom.call(addressxZb03Rd, addresstHCvXHF, uintUs42tIc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenQpFJ3BH = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBQ2B8W8 = BigInt("1730")
		const addressKuIqymG = accounts[2]
		const uintuTzmVVF = BigInt("142")
		const addressHIWqfsu = accounts[4]
		const uintPP2ohDI = BigInt("361")
		const address8nh9P8 = accounts[1]
		const uintQFJRlzo = BigInt("129")
		const addresslM8kIly = accounts[3]
		const uintKifcnes = BigInt("46")
		const addressv4OsOg = accounts[0]
		const boolYDNL7dd = await ThriftTokenQpFJ3BH.increaseApproval.call(addressKuIqymG, uintBQ2B8W8, {from: accounts[3]});
		const boolewObZeX = await ThriftTokenQpFJ3BH.decreaseApproval.call(addressHIWqfsu, uintuTzmVVF, {from: accounts[1]});
		const boolHfD5PoQ = await ThriftTokenQpFJ3BH.approve.call(address8nh9P8, uintPP2ohDI, {from: accounts[1]});
		const booldHTHehg = await ThriftTokenQpFJ3BH.approve.call(addresslM8kIly, uintQFJRlzo, {from: accounts[2]});
		const boolTgDKwJ7 = await ThriftTokenQpFJ3BH.transfer.call(addressv4OsOg, uintKifcnes, {from: accounts[1]});
	});
})