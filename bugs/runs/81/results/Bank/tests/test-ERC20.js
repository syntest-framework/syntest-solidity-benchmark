const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractbDhvnbm = await ERC20.new({from: accounts[3]});
		const ownerssfFUda = accounts[5]
		const spender346y5f = accounts[0]
		const ownerZbx1IZB = accounts[0]
		const spenderTvEUT9m = accounts[1]
		const ownerlHkrsQP = accounts[3]
		const ownerjfXzwBX = accounts[1]
		const ownerqdLwmUS = accounts[2]
		const nulllSJi5jO = await contractbDhvnbm.totalSupply.call({from: accounts[0]});
		const nullyUxmpyx = await contractbDhvnbm.balanceOf.call(ownerssfFUda, {from: accounts[1]});
		const nully5OvYN3 = await contractbDhvnbm.allowance.call(ownerZbx1IZB, spender346y5f, {from: accounts[3]});
		const nullEDNHYhI = await contractbDhvnbm.allowance.call(ownerlHkrsQP, spenderTvEUT9m, {from: accounts[4]});
		const nulljw4Ycp = await contractbDhvnbm.balanceOf.call(ownerjfXzwBX, {from: accounts[4]});
		const nullzL0BaXW = await contractbDhvnbm.balanceOf.call(ownerqdLwmUS, {from: accounts[5]});

		assert.equal(nullEDNHYhI, 0)
		assert.equal(nulljw4Ycp, 0)
		assert.equal(nulllSJi5jO, 0)
		assert.equal(nully5OvYN3, 0)
		assert.equal(nullyUxmpyx, 0)
		assert.equal(nullzL0BaXW, 0)
	});

	it('test for ERC20', async () => {
		const contractKw35f9n = await ERC20.new({from: accounts[2]});
		const valueOi6G5nq = BigInt("1786")
		const toonZhIC4 = accounts[1]
		const valueVRi8cDW = BigInt("340")
		const toUKwI4C2 = accounts[2]
		const ownerEEWgMz = accounts[4]
		const nullFGR4nGb = await contractKw35f9n.transfer.call(toonZhIC4, valueOi6G5nq, {from: accounts[0]});
		const nullHjNbxKi = await contractKw35f9n.transfer.call(toUKwI4C2, valueVRi8cDW, {from: accounts[2]});
		const nulltQyzReM = await contractKw35f9n.balanceOf.call(ownerEEWgMz, {from: accounts[4]});

		await expect(contractKw35f9n.transfer.call(toonZhIC4, valueOi6G5nq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractCbB54jF = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const subtractedValueRW0GSRu = BigInt("687")
		const spenderwOVghm = accounts[3]
		const nullHVpDvqc = await contractCbB54jF.totalSupply.call({from: accounts[1]});
		const nullzilnIQG = await contractCbB54jF.decreaseAllowance.call(spenderwOVghm, subtractedValueRW0GSRu, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractws24cou = await ERC20.new({from: accounts[4]});
		const spenderkqsMg1B = accounts[1]
		const ownerm56xjn3 = accounts[3]
		const addedValueOCkIDqq = BigInt("1730")
		const spenderDpCMHbV = accounts[2]
		const subtractedValuezAhomEf = BigInt("1769")
		const spender5Ej5F0 = accounts[2]
		const valuePeKbDbk = BigInt("1808")
		const totbi2ciZ = accounts[5]
		const null85KI9I = await contractws24cou.allowance.call(ownerm56xjn3, spenderkqsMg1B, {from: accounts[2]});
		const nullGBBPgil = await contractws24cou.increaseAllowance.call(spenderDpCMHbV, addedValueOCkIDqq, {from: accounts[0]});
		const nullIZVpwTE = await contractws24cou.totalSupply.call({from: accounts[4]});
		const nullo7j2cbJ = await contractws24cou.decreaseAllowance.call(spender5Ej5F0, subtractedValuezAhomEf, {from: accounts[4]});
		const nullBhUCIKh = await contractws24cou.transfer.call(totbi2ciZ, valuePeKbDbk, {from: accounts[0]});

		assert.equal(null85KI9I, 0)
		assert.equal(nullGBBPgil, true)
		assert.equal(nullIZVpwTE, 0)
		await expect(contractws24cou.decreaseAllowance.call(spender5Ej5F0, subtractedValuezAhomEf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDAUZCp8 = await ERC20.new({from: accounts[0]});
		const valueI5HDSZ2 = BigInt("1821")
		const spenderHDw8rDk = accounts[3]
		const ownerjmxrdHt = accounts[3]
		const valueMaEQTpS = BigInt("1665")
		const toqruIGOc = "0x0000000000000000000000000000000000000001"
		const fromDOuo0fS = accounts[0]
		const nullGNIcoag = await contractDAUZCp8.approve.call(spenderHDw8rDk, valueI5HDSZ2, {from: accounts[0]});
		const nullV3L270 = await contractDAUZCp8.balanceOf.call(ownerjmxrdHt, {from: accounts[3]});
		const nullpS57TjX = await contractDAUZCp8.transferFrom.call(fromDOuo0fS, toqruIGOc, valueMaEQTpS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullGNIcoag, true)
		assert.equal(nullV3L270, 0)
		await expect(contractDAUZCp8.transferFrom.call(fromDOuo0fS, toqruIGOc, valueMaEQTpS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})