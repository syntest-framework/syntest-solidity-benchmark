const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractpr62Yg = await ERC20.new({from: accounts[1]});
		const ownerUxqj8Kf = accounts[3]
		const addedValueRaHV9Y8 = BigInt("1909")
		const spenderHlz2cMm = accounts[2]
		const nullpS4Kljp = await contractpr62Yg.balanceOf.call(ownerUxqj8Kf, {from: accounts[2]});
		const nullpXGJtAu = await contractpr62Yg.increaseAllowance.call(spenderHlz2cMm, addedValueRaHV9Y8, {from: accounts[5]});

		assert.equal(nullpS4Kljp, 0)
		assert.equal(nullpXGJtAu, true)
	});

	it('test for ERC20', async () => {
		const contractm9xnQUf = await ERC20.new({from: accounts[5]});
		const valueVVjzzk = BigInt("1302")
		const toaMzNyeV = accounts[0]
		const fromBTfSxeH = accounts[1]
		const valuey9ZRxtN = BigInt("928")
		const toVy9EWVL = accounts[2]
		const frompGxaWXF = accounts[5]
		const addedValueGFB4mWp = BigInt("218")
		const spenderbnyB5Z = accounts[2]
		const valuepBgLCR2 = BigInt("1816")
		const spenderwgjW4bq = accounts[3]
		const addedValueYj9hcks = BigInt("1501")
		const spenderowp8Ox2 = accounts[1]
		const spenderrcEh2q1 = accounts[1]
		const ownerPh465dC = accounts[0]
		const nullVQLyHOC = await contractm9xnQUf.transferFrom.call(fromBTfSxeH, toaMzNyeV, valueVVjzzk, {from: accounts[1]});
		const nullZlM1lSN = await contractm9xnQUf.transferFrom.call(frompGxaWXF, toVy9EWVL, valuey9ZRxtN, {from: accounts[2]});
		const nullTbJUoxh = await contractm9xnQUf.increaseAllowance.call(spenderbnyB5Z, addedValueGFB4mWp, {from: accounts[5]});
		const nullZfMgON = await contractm9xnQUf.approve.call(spenderwgjW4bq, valuepBgLCR2, {from: accounts[0]});
		const nullAk7vDw = await contractm9xnQUf.increaseAllowance.call(spenderowp8Ox2, addedValueYj9hcks, {from: accounts[1]});
		const nullawPDyHg = await contractm9xnQUf.allowance.call(ownerPh465dC, spenderrcEh2q1, {from: accounts[2]});

		await expect(contractm9xnQUf.transferFrom.call(fromBTfSxeH, toaMzNyeV, valueVVjzzk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractRz7o8Sl = await ERC20.new({from: accounts[2]});
		const addedValueeFw478v = BigInt("820")
		const spenderguaGWCV = accounts[5]
		const valueyn4tJI = BigInt("641")
		const toOQTSlNw = "0x0000000000000000000000000000000000000001"
		const fromrVRyDJ = accounts[1]
		const valueq5WQKyw = BigInt("454")
		const spenderCuI2U26 = accounts[1]
		const valueumyamRT = BigInt("249")
		const tolIvwPM = accounts[3]
		const fromz2HRmey = "0x0000000000000000000000000000000000000001"
		const nullGE3zdy = await contractRz7o8Sl.totalSupply.call({from: accounts[2]});
		const nullDfaYGcs = await contractRz7o8Sl.increaseAllowance.call(spenderguaGWCV, addedValueeFw478v, {from: accounts[0]});
		const nulllOPQJ5P = await contractRz7o8Sl.transferFrom.call(fromrVRyDJ, toOQTSlNw, valueyn4tJI, {from: accounts[4]});
		const nullNVIBoRB = await contractRz7o8Sl.approve.call(spenderCuI2U26, valueq5WQKyw, {from: accounts[5]});
		const nullVLndO8N = await contractRz7o8Sl.transferFrom.call(fromz2HRmey, tolIvwPM, valueumyamRT, {from: accounts[3]});

		assert.equal(nullDfaYGcs, true)
		assert.equal(nullGE3zdy, 0)
		await expect(contractRz7o8Sl.transferFrom.call(fromrVRyDJ, toOQTSlNw, valueyn4tJI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractsblxLUj = await ERC20.new({from: accounts[4]});
		const ownervAvg1H5 = accounts[3]
		const valueUPgnI7R = BigInt("1696")
		const toyW6IGdv = accounts[2]
		const owner3AbxUn = accounts[5]
		const valuer6GP4SY = BigInt("47")
		const toNm4jbxW = accounts[4]
		const fromCTKs0s1 = accounts[0]
		const nullEIIuiZe = await contractsblxLUj.balanceOf.call(ownervAvg1H5, {from: accounts[3]});
		const nullqGHugm2 = await contractsblxLUj.transfer.call(toyW6IGdv, valueUPgnI7R, {from: accounts[1]});
		const nullvayNcK = await contractsblxLUj.balanceOf.call(owner3AbxUn, {from: accounts[4]});
		const nulleAutRK = await contractsblxLUj.transferFrom.call(fromCTKs0s1, toNm4jbxW, valuer6GP4SY, {from: accounts[4]});

		assert.equal(nullEIIuiZe, 0)
		await expect(contractsblxLUj.transfer.call(toyW6IGdv, valueUPgnI7R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractnCzsM6 = await ERC20.new({from: accounts[0]});
		const valueV0yfMMt = BigInt("748")
		const spender6WCWn9 = accounts[2]
		const ownerWk3a6WJ = accounts[3]
		const spenderElN3HNd = accounts[1]
		const ownerSTb6GkQ = accounts[3]
		const valueYWcJphl = BigInt("1340")
		const toEgnPyBX = accounts[0]
		const fromf70Y8rt = accounts[2]
		const valueu7ZU3A = BigInt("531")
		const toYgNvevp = accounts[3]
		const fromaCLAbHs = accounts[1]
		const valuejIbixd = BigInt("1423")
		const tovJzdOA = accounts[0]
		const fromiNlPkHy = accounts[3]
		const nullhXMihVo = await contractnCzsM6.approve.call(spender6WCWn9, valueV0yfMMt, {from: accounts[1]});
		const nullDikyikB = await contractnCzsM6.balanceOf.call(ownerWk3a6WJ, {from: accounts[2]});
		const null2SFcZt = await contractnCzsM6.allowance.call(ownerSTb6GkQ, spenderElN3HNd, {from: accounts[3]});
		const nullSkDuwi = await contractnCzsM6.transferFrom.call(fromf70Y8rt, toEgnPyBX, valueYWcJphl, {from: accounts[0]});
		const nullcUrgHJP = await contractnCzsM6.transferFrom.call(fromaCLAbHs, toYgNvevp, valueu7ZU3A, {from: accounts[2]});
		const nulliWDPTb8 = await contractnCzsM6.transferFrom.call(fromiNlPkHy, tovJzdOA, valuejIbixd, {from: accounts[3]});

		assert.equal(null2SFcZt, 0)
		assert.equal(nullDikyikB, 0)
		assert.equal(nullhXMihVo, true)
		await expect(contractnCzsM6.transferFrom.call(fromf70Y8rt, toEgnPyBX, valueYWcJphl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUS5OLF = await ERC20.new({from: accounts[4]});
		const subtractedValueJ5pA2g = BigInt("1127")
		const spenderQUIg5Mr = accounts[1]
		const ownerMyeyni9 = accounts[3]
		const valuef3JnHOf = BigInt("1696")
		const toSSZjNbX = accounts[3]
		const valuemdwi7Nr = BigInt("118")
		const spendera3cQPjj = accounts[0]
		const ownerMGCj2n8 = accounts[5]
		const valueu3vKbbh = BigInt("47")
		const toBBN2OMU = accounts[4]
		const fromgFGFObp = accounts[0]
		const nullgBNbag0 = await contractUS5OLF.decreaseAllowance.call(spenderQUIg5Mr, subtractedValueJ5pA2g, {from: accounts[4]});
		const nullJDIzv6W = await contractUS5OLF.balanceOf.call(ownerMyeyni9, {from: accounts[3]});
		const nullAMAfzV = await contractUS5OLF.transfer.call(toSSZjNbX, valuef3JnHOf, {from: accounts[1]});
		const nullCo9ylP7 = await contractUS5OLF.approve.call(spendera3cQPjj, valuemdwi7Nr, {from: accounts[4]});
		const nulltyKBQh7 = await contractUS5OLF.balanceOf.call(ownerMGCj2n8, {from: accounts[4]});
		const nullsYmQB5E = await contractUS5OLF.transferFrom.call(fromgFGFObp, toBBN2OMU, valueu3vKbbh, {from: accounts[4]});

		await expect(contractUS5OLF.decreaseAllowance.call(spenderQUIg5Mr, subtractedValueJ5pA2g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractiweNrNP = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuea7V6hkH = BigInt("454")
		const tox1hTc8R = accounts[4]
		const ownerds3A6F = accounts[4]
		const valueruv4Nn7 = BigInt("1440")
		const tof1LtWqE = accounts[4]
		const fromeiQ9HkH = accounts[0]
		const ownerdQZxSi0 = accounts[4]
		const nullz4FNXqD = await contractiweNrNP.transfer.call(tox1hTc8R, valuea7V6hkH, {from: accounts[5]});
		const nulla1WZuBX = await contractiweNrNP.totalSupply.call({from: accounts[2]});
		const nullO9HmCnX = await contractiweNrNP.balanceOf.call(ownerds3A6F, {from: accounts[4]});
		const nullTmCZ5NW = await contractiweNrNP.transferFrom.call(fromeiQ9HkH, tof1LtWqE, valueruv4Nn7, {from: accounts[0]});
		const nullOFarMJg = await contractiweNrNP.balanceOf.call(ownerdQZxSi0, {from: accounts[2]});
	});
})