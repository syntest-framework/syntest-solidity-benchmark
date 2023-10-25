const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractwR3O2lr = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueX48PSBs = BigInt("326")
		const spender2uMfFQ = accounts[4]
		const addedValueFBn71hd = BigInt("1529")
		const spenderYJHja5V = accounts[4]
		const valueQ4FW28j = BigInt("453")
		const tokZNizHI = accounts[2]
		const fromu5oaLg3 = accounts[4]
		const nullNTg3lhF = await contractwR3O2lr.increaseAllowance.call(spender2uMfFQ, addedValueX48PSBs, {from: accounts[1]});
		const nullqa1Bigi = await contractwR3O2lr.increaseAllowance.call(spenderYJHja5V, addedValueFBn71hd, {from: accounts[2]});
		const nullff09zyX = await contractwR3O2lr.transferFrom.call(fromu5oaLg3, tokZNizHI, valueQ4FW28j, {from: "0x0000000000000000000000000000000000000001"});
		const nulldwI47Ip = await contractwR3O2lr.totalSupply.call({from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractT44MogC = await ERC20.new({from: accounts[5]});
		const valuePhqwKXJ = BigInt("1099")
		const toLNgDEU = accounts[4]
		const fromIPMYDKG = accounts[4]
		const addedValueJtqys8b = BigInt("1654")
		const spenderXyp5pbb = accounts[3]
		const valuedEP7QDv = BigInt("281")
		const spenderInyBqhq = accounts[1]
		const subtractedValuetS7eYLO = BigInt("244")
		const spenderiqBC9T = accounts[0]
		const nullqPaaS1v = await contractT44MogC.transferFrom.call(fromIPMYDKG, toLNgDEU, valuePhqwKXJ, {from: accounts[4]});
		const nulleDj8FF = await contractT44MogC.increaseAllowance.call(spenderXyp5pbb, addedValueJtqys8b, {from: accounts[5]});
		const nullliS261 = await contractT44MogC.approve.call(spenderInyBqhq, valuedEP7QDv, {from: accounts[2]});
		const nullY6nB569 = await contractT44MogC.decreaseAllowance.call(spenderiqBC9T, subtractedValuetS7eYLO, {from: accounts[1]});

		await expect(contractT44MogC.transferFrom.call(fromIPMYDKG, toLNgDEU, valuePhqwKXJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractbd6DsLm = await ERC20.new({from: accounts[2]});
		const spenderM8GI4d4 = accounts[1]
		const ownerJTPsIpO = accounts[4]
		const valueSfhqwWl = BigInt("1797")
		const spenderuxmDh7q = accounts[0]
		const valuegqNh210 = BigInt("667")
		const toobkpeOe = accounts[3]
		const fromepBfraD = accounts[2]
		const ownerylQLutS = accounts[4]
		const nullekHZXB = await contractbd6DsLm.allowance.call(ownerJTPsIpO, spenderM8GI4d4, {from: accounts[0]});
		const nullBigNqJ = await contractbd6DsLm.approve.call(spenderuxmDh7q, valueSfhqwWl, {from: accounts[0]});
		const nullKYcy1en = await contractbd6DsLm.transferFrom.call(fromepBfraD, toobkpeOe, valuegqNh210, {from: accounts[2]});
		const nullZnVz6wv = await contractbd6DsLm.balanceOf.call(ownerylQLutS, {from: accounts[3]});

		assert.equal(nullBigNqJ, true)
		assert.equal(nullekHZXB, 0)
		await expect(contractbd6DsLm.transferFrom.call(fromepBfraD, toobkpeOe, valuegqNh210, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUoYfsuD = await ERC20.new({from: accounts[4]});
		const valueZbu1SxX = BigInt("183")
		const toUnY2vyh = accounts[4]
		const valuetDne9x = BigInt("1795")
		const toXZTar7z = accounts[4]
		const nullcrp7st9 = await contractUoYfsuD.transfer.call(toUnY2vyh, valueZbu1SxX, {from: accounts[2]});
		const nullNO3wj7o = await contractUoYfsuD.transfer.call(toXZTar7z, valuetDne9x, {from: accounts[3]});

		await expect(contractUoYfsuD.transfer.call(toUnY2vyh, valueZbu1SxX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractKkEPoR6 = await ERC20.new({from: accounts[1]});
		const ownerMCzUaLr = accounts[1]
		const spenderm2bsxxv = accounts[1]
		const ownercKyyoGw = accounts[5]
		const valueTxWYka = BigInt("1945")
		const toklHSBpL = accounts[2]
		const nullGI49VKC = await contractKkEPoR6.balanceOf.call(ownerMCzUaLr, {from: accounts[4]});
		const nullOfBYPP5 = await contractKkEPoR6.allowance.call(ownercKyyoGw, spenderm2bsxxv, {from: accounts[0]});
		const nullBw2OFF7 = await contractKkEPoR6.transfer.call(toklHSBpL, valueTxWYka, {from: accounts[0]});

		assert.equal(nullGI49VKC, 0)
		assert.equal(nullOfBYPP5, 0)
		await expect(contractKkEPoR6.transfer.call(toklHSBpL, valueTxWYka, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDxYNnqt = await ERC20.new({from: accounts[0]});
		const spenderckUdiCw = accounts[1]
		const ownerdqGzhYe = accounts[3]
		const spenderQyNpJ2L = accounts[1]
		const ownerGXmHEen = accounts[3]
		const addedValueqmsEG5L = BigInt("649")
		const spender9hbQPR = accounts[0]
		const valueyN6Ys4 = BigInt("1074")
		const toE2xUiqe = "0x0000000000000000000000000000000000000001"
		const nullriCbpeU = await contractDxYNnqt.allowance.call(ownerdqGzhYe, spenderckUdiCw, {from: accounts[1]});
		const nullmIkMOZA = await contractDxYNnqt.allowance.call(ownerGXmHEen, spenderQyNpJ2L, {from: accounts[5]});
		const nullQOeNNyK = await contractDxYNnqt.increaseAllowance.call(spender9hbQPR, addedValueqmsEG5L, {from: accounts[5]});
		const nullMGoP8PN = await contractDxYNnqt.transfer.call(toE2xUiqe, valueyN6Ys4, {from: accounts[4]});

		assert.equal(nullQOeNNyK, true)
		assert.equal(nullmIkMOZA, 0)
		assert.equal(nullriCbpeU, 0)
		await expect(contractDxYNnqt.transfer.call(toE2xUiqe, valueyN6Ys4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractX22ztlR = await ERC20.new({from: accounts[1]});
		const addedValuegCudScN = BigInt("991")
		const spenderB858S8g = accounts[2]
		const addedValuertKwoIl = BigInt("2")
		const spendernlVo0N = "0x0000000000000000000000000000000000000001"
		const nullOpYztg1 = await contractX22ztlR.totalSupply.call({from: accounts[3]});
		const nullA9Hfxs8 = await contractX22ztlR.increaseAllowance.call(spenderB858S8g, addedValuegCudScN, {from: accounts[4]});
		const nullbpd2owF = await contractX22ztlR.increaseAllowance.call(spendernlVo0N, addedValuertKwoIl, {from: accounts[3]});

		assert.equal(nullA9Hfxs8, true)
		assert.equal(nullOpYztg1, 0)
		assert.equal(nullbpd2owF, true)
	});

	it('test for ERC20', async () => {
		const contracto8kWqOB = await ERC20.new({from: accounts[0]});
		const valueBFyv8FN = BigInt("1142")
		const spenderCleOHBJ = accounts[3]
		const subtractedValuea2nRvMm = BigInt("1331")
		const spendereVhRoqu = "0x0000000000000000000000000000000000000001"
		const subtractedValuehMvig72 = BigInt("368")
		const spenderFYfmSe = "0x0000000000000000000000000000000000000001"
		const spenderE9FuwSn = accounts[0]
		const ownerIqjzvFC = accounts[1]
		const valueuQwIxC8 = BigInt("1105")
		const toDTr06Kb = accounts[4]
		const addedValueehTLAbg = BigInt("1769")
		const spenderOZNon55 = accounts[1]
		const nullHmUpt5 = await contracto8kWqOB.approve.call(spenderCleOHBJ, valueBFyv8FN, {from: accounts[5]});
		const nullprgw72H = await contracto8kWqOB.decreaseAllowance.call(spendereVhRoqu, subtractedValuea2nRvMm, {from: accounts[2]});
		const nullWYOmEoW = await contracto8kWqOB.decreaseAllowance.call(spenderFYfmSe, subtractedValuehMvig72, {from: accounts[4]});
		const nullGHvWzMz = await contracto8kWqOB.allowance.call(ownerIqjzvFC, spenderE9FuwSn, {from: accounts[2]});
		const nullSgHSNxV = await contracto8kWqOB.transfer.call(toDTr06Kb, valueuQwIxC8, {from: accounts[3]});
		const nullCgsWUx9 = await contracto8kWqOB.increaseAllowance.call(spenderOZNon55, addedValueehTLAbg, {from: accounts[3]});

		assert.equal(nullHmUpt5, true)
		await expect(contracto8kWqOB.decreaseAllowance.call(spendereVhRoqu, subtractedValuea2nRvMm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})