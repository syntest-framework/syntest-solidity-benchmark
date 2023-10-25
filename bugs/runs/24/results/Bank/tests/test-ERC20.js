const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractmoNXiO1 = await ERC20.new({from: accounts[4]});
		const valuevEN2ZI5 = BigInt("452")
		const toHLKttT = accounts[5]
		const valueHQ4dJtJ = BigInt("1197")
		const toQlpiIq9 = accounts[0]
		const fromP3XSMub = accounts[1]
		const addedValueUd0jkna = BigInt("1042")
		const spendervMU2769 = accounts[3]
		const subtractedValueavBpHW4 = BigInt("1585")
		const spenderTcThce7 = accounts[0]
		const ownera4sH7S5 = accounts[1]
		const nullFmmHNX9 = await contractmoNXiO1.transfer.call(toHLKttT, valuevEN2ZI5, {from: accounts[1]});
		const nullsyLB3F9 = await contractmoNXiO1.transferFrom.call(fromP3XSMub, toQlpiIq9, valueHQ4dJtJ, {from: accounts[1]});
		const nullNY5klmr = await contractmoNXiO1.increaseAllowance.call(spendervMU2769, addedValueUd0jkna, {from: accounts[2]});
		const null22FVp5 = await contractmoNXiO1.decreaseAllowance.call(spenderTcThce7, subtractedValueavBpHW4, {from: accounts[0]});
		const nulle6ErYPR = await contractmoNXiO1.balanceOf.call(ownera4sH7S5, {from: accounts[5]});

		await expect(contractmoNXiO1.transfer.call(toHLKttT, valuevEN2ZI5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractWKrYrD6 = await ERC20.new({from: accounts[0]});
		const ownerixu63Du = accounts[3]
		const nullJdet2NH = await contractWKrYrD6.balanceOf.call(ownerixu63Du, {from: accounts[1]});
		const nullWCvn8rP = await contractWKrYrD6.totalSupply.call({from: accounts[2]});
		const nullsxvuSSh = await contractWKrYrD6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullJdet2NH, 0)
		assert.equal(nullWCvn8rP, 0)
		assert.equal(nullsxvuSSh, 0)
	});

	it('test for ERC20', async () => {
		const contractpiNTDXX = await ERC20.new({from: accounts[0]});
		const valueYUGykV1 = BigInt("193")
		const toNzAhXl8 = accounts[2]
		const fromABgKP39 = accounts[3]
		const ownerfVNTfAP = accounts[0]
		const valuexZdr7jU = BigInt("543")
		const tobaVNQBz = accounts[1]
		const valueH6guFTD = BigInt("932")
		const spenderGqYa9EB = accounts[0]
		const addedValuecOYvd5S = BigInt("1766")
		const spenderCVFnHFp = accounts[2]
		const nullhS9cl9i = await contractpiNTDXX.transferFrom.call(fromABgKP39, toNzAhXl8, valueYUGykV1, {from: accounts[0]});
		const nulljcaBow = await contractpiNTDXX.balanceOf.call(ownerfVNTfAP, {from: accounts[2]});
		const nulltY4wd54 = await contractpiNTDXX.transfer.call(tobaVNQBz, valuexZdr7jU, {from: accounts[5]});
		const nullQgraZ1 = await contractpiNTDXX.approve.call(spenderGqYa9EB, valueH6guFTD, {from: accounts[1]});
		const nullby0dInn = await contractpiNTDXX.increaseAllowance.call(spenderCVFnHFp, addedValuecOYvd5S, {from: accounts[2]});

		await expect(contractpiNTDXX.transferFrom.call(fromABgKP39, toNzAhXl8, valueYUGykV1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractOByZTyo = await ERC20.new({from: accounts[2]});
		const valuegLdmayD = BigInt("1216")
		const spenderIkgijN1 = accounts[3]
		const ownervQX1O2P = accounts[2]
		const spenderHJZJXwp = accounts[4]
		const ownercCAAacg = accounts[0]
		const spenderPdJKHeR = accounts[3]
		const ownerCLhwQt = accounts[2]
		const spenderTPzQDzA = accounts[3]
		const ownerY5VP9jL = accounts[4]
		const nullREkbWGB = await contractOByZTyo.approve.call(spenderIkgijN1, valuegLdmayD, {from: accounts[3]});
		const nullZG6q5ys = await contractOByZTyo.balanceOf.call(ownervQX1O2P, {from: accounts[1]});
		const nullwTr2cuq = await contractOByZTyo.allowance.call(ownercCAAacg, spenderHJZJXwp, {from: accounts[3]});
		const nullawxVFX7 = await contractOByZTyo.allowance.call(ownerCLhwQt, spenderPdJKHeR, {from: accounts[0]});
		const nullvnYHo6r = await contractOByZTyo.allowance.call(ownerY5VP9jL, spenderTPzQDzA, {from: accounts[0]});

		assert.equal(nullREkbWGB, true)
		assert.equal(nullZG6q5ys, 0)
		assert.equal(nullawxVFX7, 0)
		assert.equal(nullvnYHo6r, 0)
		assert.equal(nullwTr2cuq, 0)
	});

	it('test for ERC20', async () => {
		const contract6GvW8F = await ERC20.new({from: accounts[1]});
		const valueVP42cZ1 = BigInt("805")
		const spendervWjOQ2z = accounts[4]
		const addedValueP8WXFwV = BigInt("856")
		const spenderSAEFpO = accounts[2]
		const valueXqwlJUn = BigInt("920")
		const toIBMU7Jp = accounts[0]
		const fromD17MlGA = accounts[1]
		const nullcskRARw = await contract6GvW8F.approve.call(spendervWjOQ2z, valueVP42cZ1, {from: accounts[1]});
		const nulldlp9XOC = await contract6GvW8F.increaseAllowance.call(spenderSAEFpO, addedValueP8WXFwV, {from: accounts[0]});
		const nulllL01VKk = await contract6GvW8F.transferFrom.call(fromD17MlGA, toIBMU7Jp, valueXqwlJUn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullcskRARw, true)
		assert.equal(nulldlp9XOC, true)
		await expect(contract6GvW8F.transferFrom.call(fromD17MlGA, toIBMU7Jp, valueXqwlJUn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractFDN8bDD = await ERC20.new({from: accounts[0]});
		const subtractedValuethKng1r = BigInt("849")
		const spendersMVmLcz = accounts[1]
		const spenderlntLaW = accounts[3]
		const ownerCz7ZUB = accounts[2]
		const valuewQYMit = BigInt("308")
		const tovfmWcVj = accounts[2]
		const ownerRC1rlEa = accounts[2]
		const nullq16lWA = await contractFDN8bDD.decreaseAllowance.call(spendersMVmLcz, subtractedValuethKng1r, {from: accounts[2]});
		const nully84WZ2Z = await contractFDN8bDD.allowance.call(ownerCz7ZUB, spenderlntLaW, {from: accounts[4]});
		const nullh5V1V4S = await contractFDN8bDD.transfer.call(tovfmWcVj, valuewQYMit, {from: accounts[3]});
		const nulloZlQx25 = await contractFDN8bDD.balanceOf.call(ownerRC1rlEa, {from: accounts[4]});

		await expect(contractFDN8bDD.decreaseAllowance.call(spendersMVmLcz, subtractedValuethKng1r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractySNvkv = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuepk1ApzS = BigInt("1709")
		const toWRMWYju = accounts[3]
		const frombfuDU10 = accounts[1]
		const spenderwvH7ndT = accounts[1]
		const ownera45i1E1 = accounts[1]
		const ownerEJHw2M3 = accounts[0]
		const valuekwXKUk = BigInt("350")
		const toKbSgbJW = accounts[0]
		const fromZh4lx5B = accounts[2]
		const nullAKBLc7M = await contractySNvkv.transferFrom.call(frombfuDU10, toWRMWYju, valuepk1ApzS, {from: "0x0000000000000000000000000000000000000001"});
		const nulllUp1Faa = await contractySNvkv.totalSupply.call({from: accounts[3]});
		const nulloWfXPi = await contractySNvkv.allowance.call(ownera45i1E1, spenderwvH7ndT, {from: accounts[3]});
		const nullZ0gCqa = await contractySNvkv.balanceOf.call(ownerEJHw2M3, {from: accounts[0]});
		const nullghN9MiE = await contractySNvkv.transferFrom.call(fromZh4lx5B, toKbSgbJW, valuekwXKUk, {from: accounts[2]});
	});
})