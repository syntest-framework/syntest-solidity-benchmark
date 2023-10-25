const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractnb5sveu = await VBZRXWrapper.new({from: accounts[5]});
		const valuehirf3X = BigInt("1583")
		const dstECJPNHp = accounts[4]
		const srcASlCsnq = accounts[1]
		const valueiuJcJ1M = BigInt("661")
		const spenderlgZBMtn = accounts[2]
		const nullXeOxtcO = await contractnb5sveu.transferFrom.call(srcASlCsnq, dstECJPNHp, valuehirf3X, {from: accounts[3]});
		const nulllSq3b2g = await contractnb5sveu.approve.call(spenderlgZBMtn, valueiuJcJ1M, {from: accounts[0]});

		await expect(contractnb5sveu.transferFrom.call(srcASlCsnq, dstECJPNHp, valuehirf3X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractrNMgpKY = await VBZRXWrapper.new({from: accounts[3]});
		const valueMSlJ7ff = BigInt("940")
		const accountsJjUZ2 = accounts[4]
		const valueaX484OY = BigInt("286")
		const dstoQpDePs = accounts[3]
		await contractrNMgpKY.withdraw.call(valueMSlJ7ff, {from: accounts[4]});
		const nullGN0kJM = await contractrNMgpKY.claimable.call(accountsJjUZ2, {from: accounts[1]});
		const nullNkR5z2 = await contractrNMgpKY.transfer.call(dstoQpDePs, valueaX484OY, {from: accounts[3]});
		const nullBVkzoVG = await contractrNMgpKY.claim.call({from: accounts[2]});

		await expect(contractrNMgpKY.withdraw.call(valueMSlJ7ff, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractCgPf4gd = await VBZRXWrapper.new({from: accounts[0]});
		const accountL67gtgT = accounts[3]
		const valuewuXwasD = BigInt("461")
		const valuegR0Q65 = BigInt("754")
		const spenderCDQNW7g = accounts[0]
		const nullSCRWg8o = await contractCgPf4gd.claimable.call(accountL67gtgT, {from: accounts[5]});
		const nulljdxru3D = await contractCgPf4gd.claim.call({from: accounts[0]});
		await contractCgPf4gd.exit.call({from: accounts[4]});
		await contractCgPf4gd.deposit.call(valuewuXwasD, {from: accounts[3]});
		const nullcqWllz1 = await contractCgPf4gd.approve.call(spenderCDQNW7g, valuegR0Q65, {from: "0x0000000000000000000000000000000000000001"});
		await contractCgPf4gd.exit.call({from: accounts[4]});

		await expect(contractCgPf4gd.claimable.call(accountL67gtgT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contract2NO8FE = await VBZRXWrapper.new({from: accounts[5]});
		const valuedI16fLi = BigInt("94")
		const valueJKPAI4D = BigInt("1887")
		const valueiQBhxH3 = BigInt("1885")
		const spenderfakxkQo = accounts[2]
		await contract2NO8FE.deposit.call(valuedI16fLi, {from: "0x0000000000000000000000000000000000000001"});
		await contract2NO8FE.exit.call({from: accounts[4]});
		await contract2NO8FE.exit.call({from: accounts[1]});
		await contract2NO8FE.deposit.call(valueJKPAI4D, {from: accounts[2]});
		const nullT3uY8We = await contract2NO8FE.approve.call(spenderfakxkQo, valueiQBhxH3, {from: accounts[1]});

		await expect(contract2NO8FE.deposit.call(valuedI16fLi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSp57mJh = await VBZRXWrapper.new({from: accounts[4]});
		const valueAphfFKh = BigInt("274")
		const valuew6rF3U = BigInt("1093")
		const dstaY7Wgsm = accounts[4]
		const valuewV5XHL4 = BigInt("1821")
		const dstKCR32z = accounts[1]
		await contractSp57mJh.exit.call({from: accounts[5]});
		const nullZXACBzk = await contractSp57mJh.claim.call({from: accounts[0]});
		await contractSp57mJh.deposit.call(valueAphfFKh, {from: accounts[0]});
		const nullsW1h1LU = await contractSp57mJh.transfer.call(dstaY7Wgsm, valuew6rF3U, {from: accounts[3]});
		const nullu6Kq8MZ = await contractSp57mJh.transfer.call(dstKCR32z, valuewV5XHL4, {from: accounts[1]});
		const nullX2qwfb9 = await contractSp57mJh.claim.call({from: accounts[3]});

		await expect(contractSp57mJh.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractDIGycVD = await VBZRXWrapper.new({from: accounts[5]});
		const valueyz4aJ2A = BigInt("661")
		const spenderxViryJC = accounts[2]
		const nullqz4ThF7 = await contractDIGycVD.approve.call(spenderxViryJC, valueyz4aJ2A, {from: accounts[0]});

		assert.equal(nullqz4ThF7, true)
	});

	it('test for VBZRXWrapper', async () => {
		const contractTPRXrAb = await VBZRXWrapper.new({from: accounts[0]});
		const valueiu1GckB = BigInt("234")
		const dstccMFBzy = "0x0000000000000000000000000000000000000001"
		const valuebuq5qt6 = BigInt("1955")
		const dstMLlkNZd = accounts[1]
		const srcIpGMZiK = accounts[2]
		const nullV8XumSn = await contractTPRXrAb.transfer.call(dstccMFBzy, valueiu1GckB, {from: accounts[4]});
		const nullFxaCmCM = await contractTPRXrAb.transferFrom.call(srcIpGMZiK, dstMLlkNZd, valuebuq5qt6, {from: accounts[1]});

		await expect(contractTPRXrAb.transfer.call(dstccMFBzy, valueiu1GckB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractL9ArngP = await VBZRXWrapper.new({from: accounts[5]});
		const valuenVj8tKk = BigInt("661")
		const spenderpTDqoZw = accounts[2]
		const nullTJOB7kZ = await contractL9ArngP.approve.call(spenderpTDqoZw, valuenVj8tKk, {from: accounts[0]});
		const nullP58EJra = await contractL9ArngP.claim.call({from: accounts[2]});

		assert.equal(nullP58EJra, 0)
		assert.equal(nullTJOB7kZ, true)
	});

	it('test for VBZRXWrapper', async () => {
		const contractAaFanGh = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valued5Psw3Q = BigInt("1741")
		const dstxscvmkl = "0x0000000000000000000000000000000000000001"
		const valueO7tKhGF = BigInt("429")
		const spenderTT6PuiH = accounts[4]
		await contractAaFanGh.exit.call({from: accounts[0]});
		const nullTf4PJmw = await contractAaFanGh.transfer.call(dstxscvmkl, valued5Psw3Q, {from: accounts[3]});
		await contractAaFanGh.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullNbm51Z = await contractAaFanGh.approve.call(spenderTT6PuiH, valueO7tKhGF, {from: accounts[1]});
		const nullmGRwbcq = await contractAaFanGh.claim.call({from: accounts[4]});
		await contractAaFanGh.exit.call({from: accounts[2]});
	});
})