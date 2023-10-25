const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractSAMYf5f = await ERC20.new({from: accounts[2]});
		const ownerNoaRMLK = accounts[5]
		const valuen04UK7L = BigInt("1111")
		const spenderQ2OTsOC = accounts[2]
		const subtractedValueoSWcCtP = BigInt("879")
		const spenderQoSNv03 = accounts[0]
		const nullJUTYq71 = await contractSAMYf5f.totalSupply.call({from: accounts[4]});
		const nulltVFDGCA = await contractSAMYf5f.balanceOf.call(ownerNoaRMLK, {from: accounts[1]});
		const nullknMFm0n = await contractSAMYf5f.approve.call(spenderQ2OTsOC, valuen04UK7L, {from: accounts[2]});
		const nullXHd717 = await contractSAMYf5f.decreaseAllowance.call(spenderQoSNv03, subtractedValueoSWcCtP, {from: accounts[3]});

		assert.equal(nullJUTYq71, 0)
		assert.equal(nullknMFm0n, true)
		assert.equal(nulltVFDGCA, 0)
		await expect(contractSAMYf5f.decreaseAllowance.call(spenderQoSNv03, subtractedValueoSWcCtP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractVoZ68V = await ERC20.new({from: accounts[0]});
		const spenderXmPP9Sf = accounts[0]
		const ownere1Pdb3 = accounts[4]
		const spenderljSPx88 = "0x0000000000000000000000000000000000000001"
		const ownerM3NB8l = accounts[3]
		const addedValuepomtVqu = BigInt("1723")
		const spenderypCYpgQ = accounts[3]
		const nullsAFI55s = await contractVoZ68V.allowance.call(ownere1Pdb3, spenderXmPP9Sf, {from: accounts[5]});
		const nullKO8Ea3V = await contractVoZ68V.allowance.call(ownerM3NB8l, spenderljSPx88, {from: accounts[2]});
		const nullIZllTuy = await contractVoZ68V.totalSupply.call({from: accounts[2]});
		const nullMWoGtxZ = await contractVoZ68V.increaseAllowance.call(spenderypCYpgQ, addedValuepomtVqu, {from: accounts[1]});

		assert.equal(nullIZllTuy, 0)
		assert.equal(nullKO8Ea3V, 0)
		assert.equal(nullMWoGtxZ, true)
		assert.equal(nullsAFI55s, 0)
	});

	it('test for ERC20', async () => {
		const contractkipsdjN = await ERC20.new({from: accounts[0]});
		const ownernpw4tB = accounts[3]
		const ownerGvTowpV = accounts[4]
		const ownerwi5XE02 = accounts[0]
		const addedValueHarD9oP = BigInt("401")
		const spenderXD9GXxM = accounts[0]
		const valuePFCxZOD = BigInt("705")
		const toe0fi3t = accounts[3]
		const fromBU5OVr = accounts[1]
		const nullasPwhtV = await contractkipsdjN.balanceOf.call(ownernpw4tB, {from: accounts[0]});
		const nullUqqhZ8u = await contractkipsdjN.balanceOf.call(ownerGvTowpV, {from: accounts[4]});
		const nullijks9oL = await contractkipsdjN.balanceOf.call(ownerwi5XE02, {from: accounts[2]});
		const nullQHxHbVQ = await contractkipsdjN.increaseAllowance.call(spenderXD9GXxM, addedValueHarD9oP, {from: accounts[2]});
		const nullopkbEdo = await contractkipsdjN.transferFrom.call(fromBU5OVr, toe0fi3t, valuePFCxZOD, {from: accounts[4]});

		assert.equal(nullQHxHbVQ, true)
		assert.equal(nullUqqhZ8u, 0)
		assert.equal(nullasPwhtV, 0)
		assert.equal(nullijks9oL, 0)
		await expect(contractkipsdjN.transferFrom.call(fromBU5OVr, toe0fi3t, valuePFCxZOD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJOXXx1 = await ERC20.new({from: accounts[1]});
		const valueGx5cyb5 = BigInt("560")
		const toGQ7pFk3 = "0x0000000000000000000000000000000000000001"
		const valueykLWAz2 = BigInt("1030")
		const tog3h8mcL = accounts[1]
		const frompQRNAwL = accounts[4]
		const nullOqilPF4 = await contractJOXXx1.transfer.call(toGQ7pFk3, valueGx5cyb5, {from: accounts[3]});
		const null8QjC9g = await contractJOXXx1.transferFrom.call(frompQRNAwL, tog3h8mcL, valueykLWAz2, {from: accounts[2]});

		await expect(contractJOXXx1.transfer.call(toGQ7pFk3, valueGx5cyb5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractVs2peh = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderaVTpV4I = "0x0000000000000000000000000000000000000001"
		const ownerM9K7CCF = accounts[4]
		const valueF4JZOME = BigInt("303")
		const tod1zSghv = accounts[1]
		const ownerZMGrqyb = accounts[1]
		const subtractedValuePZddbve = BigInt("1256")
		const spenderW8Pjup7 = accounts[5]
		const addedValuekcXOpRV = BigInt("196")
		const spenderpTtJu1J = accounts[0]
		const ownerkHLRiOA = accounts[0]
		const nulluaaXQvU = await contractVs2peh.allowance.call(ownerM9K7CCF, spenderaVTpV4I, {from: accounts[4]});
		const nullZO5qQGm = await contractVs2peh.transfer.call(tod1zSghv, valueF4JZOME, {from: accounts[0]});
		const nulltSEPeKc = await contractVs2peh.balanceOf.call(ownerZMGrqyb, {from: accounts[2]});
		const nullHLPyl5a = await contractVs2peh.decreaseAllowance.call(spenderW8Pjup7, subtractedValuePZddbve, {from: accounts[1]});
		const nullPL4z88 = await contractVs2peh.increaseAllowance.call(spenderpTtJu1J, addedValuekcXOpRV, {from: accounts[3]});
		const nulliUY9Hud = await contractVs2peh.balanceOf.call(ownerkHLRiOA, {from: accounts[2]});
	});
})