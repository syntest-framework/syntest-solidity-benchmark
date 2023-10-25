const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractWqTBuz2 = await ERC721.new({from: accounts[5]});
		const operatorfHuMzu = accounts[1]
		const ownerljNxF3g = accounts[4]
		const tokenIdVyhSXFO = BigInt("1418")
		const _dataxBMu1SS = "0x1a0b020c020c14140b182015050b1002160a100b0c071a"
		const tokenIdZCsft3U = BigInt("30")
		const toI1U3RLT = accounts[2]
		const fromWw0kiQR = accounts[1]
		const nullk4cmbPv = await contractWqTBuz2.isApprovedForAll.call(ownerljNxF3g, operatorfHuMzu, {from: "0x0000000000000000000000000000000000000001"});
		const nullls2YHH9 = await contractWqTBuz2.getApproved.call(tokenIdVyhSXFO, {from: "0x0000000000000000000000000000000000000001"});
		await contractWqTBuz2.safeTransferFrom.call(fromWw0kiQR, toI1U3RLT, tokenIdZCsft3U, _dataxBMu1SS, {from: accounts[0]});

		assert.equal(nullk4cmbPv, false)
		await expect(contractWqTBuz2.getApproved.call(tokenIdVyhSXFO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractuATPAmh = await ERC721.new({from: accounts[0]});
		const tokenIdbvN4PWM = BigInt("1500")
		const tosSXAT5e = "0x0000000000000000000000000000000000000001"
		const operatorx5BQmQQ = accounts[4]
		const ownerrngb2O = accounts[5]
		const tokenIdZ0jA0le = BigInt("1895")
		const togh8ToID = accounts[3]
		const fromCwmLli = "0x0000000000000000000000000000000000000001"
		const tokenIdLcTSpiC = BigInt("2020")
		await contractuATPAmh.approve.call(tosSXAT5e, tokenIdbvN4PWM, {from: accounts[1]});
		const nullBtUL0FQ = await contractuATPAmh.isApprovedForAll.call(ownerrngb2O, operatorx5BQmQQ, {from: accounts[1]});
		await contractuATPAmh.transferFrom.call(fromCwmLli, togh8ToID, tokenIdZ0jA0le, {from: accounts[4]});
		const nullbqhGSm1 = await contractuATPAmh.getApproved.call(tokenIdLcTSpiC, {from: accounts[1]});

		await expect(contractuATPAmh.approve.call(tosSXAT5e, tokenIdbvN4PWM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractwjtwUHk = await ERC721.new({from: accounts[0]});
		const tokenIdqCwhSD = BigInt("709")
		const toWSBjb9 = accounts[1]
		const fromAOuuwlc = accounts[2]
		const tokenIdZKTDiMo = BigInt("1567")
		const _datawNk1JBg = "0x0905100d16121b0e1419152011050f061f1d"
		const tokenIdz8txDFr = BigInt("1479")
		const towTXBVN = accounts[5]
		const fromMddHMcv = "0x0000000000000000000000000000000000000001"
		const tokenIdAulMwRT = BigInt("1166")
		const tontABBNV = accounts[4]
		const fromOGr4gbl = accounts[0]
		const approvedNKl874 = true
		const tos97wgWW = accounts[2]
		await contractwjtwUHk.safeTransferFrom.call(fromAOuuwlc, toWSBjb9, tokenIdqCwhSD, {from: accounts[1]});
		const nullVlaQB4d = await contractwjtwUHk.getApproved.call(tokenIdZKTDiMo, {from: accounts[0]});
		await contractwjtwUHk.safeTransferFrom.call(fromMddHMcv, towTXBVN, tokenIdz8txDFr, _datawNk1JBg, {from: "0x0000000000000000000000000000000000000001"});
		await contractwjtwUHk.transferFrom.call(fromOGr4gbl, tontABBNV, tokenIdAulMwRT, {from: accounts[5]});
		await contractwjtwUHk.setApprovalForAll.call(tos97wgWW, approvedNKl874, {from: accounts[4]});

		await expect(contractwjtwUHk.safeTransferFrom.call(fromAOuuwlc, toWSBjb9, tokenIdqCwhSD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAWosUr7 = await ERC721.new({from: accounts[1]});
		const ownerxwCEi5q = accounts[2]
		const tokenIddvqpqsO = BigInt("1123")
		const tokenIdPXzsLI1 = BigInt("573")
		const tohmmDjX = accounts[0]
		const fromf9R9HrV = accounts[4]
		const nullxqZTHIC = await contractAWosUr7.balanceOf.call(ownerxwCEi5q, {from: "0x0000000000000000000000000000000000000001"});
		const nullWYtXjtR = await contractAWosUr7.ownerOf.call(tokenIddvqpqsO, {from: accounts[2]});
		await contractAWosUr7.transferFrom.call(fromf9R9HrV, tohmmDjX, tokenIdPXzsLI1, {from: accounts[5]});

		assert.equal(nullxqZTHIC, 0)
		await expect(contractAWosUr7.ownerOf.call(tokenIddvqpqsO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPF0UBz = await ERC721.new({from: accounts[5]});
		const approvedMu6jSho = false
		const toQsxDoBw = accounts[0]
		const tokenIdtMhi8r0 = BigInt("1671")
		await contractPF0UBz.setApprovalForAll.call(toQsxDoBw, approvedMu6jSho, {from: accounts[4]});
		const nullJiZcZZc = await contractPF0UBz.getApproved.call(tokenIdtMhi8r0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPF0UBz.setApprovalForAll.call(toQsxDoBw, approvedMu6jSho, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyLMkb3t = await ERC721.new({from: accounts[5]});
		const approvedDfEUcst = true
		const toPHnVQQT = accounts[4]
		await contractyLMkb3t.setApprovalForAll.call(toPHnVQQT, approvedDfEUcst, {from: accounts[4]});

		await expect(contractyLMkb3t.setApprovalForAll.call(toPHnVQQT, approvedDfEUcst, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkeMap3f = await ERC721.new({from: accounts[5]});
		const approvedLavtx3V = true
		const tomSJQSyf = accounts[5]
		const tokenIdHW6j4WS = BigInt("1075")
		const toiMDJB5 = accounts[4]
		const fromPSuSfUw = accounts[1]
		const approvedSnoMlQY = false
		const toWkPex9U = accounts[4]
		await contractkeMap3f.setApprovalForAll.call(tomSJQSyf, approvedLavtx3V, {from: accounts[4]});
		await contractkeMap3f.transferFrom.call(fromPSuSfUw, toiMDJB5, tokenIdHW6j4WS, {from: accounts[3]});
		await contractkeMap3f.setApprovalForAll.call(toWkPex9U, approvedSnoMlQY, {from: accounts[4]});

		await expect(contractkeMap3f.setApprovalForAll.call(tomSJQSyf, approvedLavtx3V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXxYyIR = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorTpfQ6iY = accounts[2]
		const ownerlcSM3ks = accounts[3]
		const operatorgRdPLap = accounts[1]
		const ownerOhMsdEh = accounts[3]
		const tokenIdYCxMgrk = BigInt("941")
		const tokenIdsMYdzS = BigInt("759")
		const tokenIdklsQ6GT = BigInt("476")
		const toYBD1KZz = accounts[3]
		const nullLmvUx5 = await contractXxYyIR.isApprovedForAll.call(ownerlcSM3ks, operatorTpfQ6iY, {from: accounts[2]});
		const nullX4jM64g = await contractXxYyIR.isApprovedForAll.call(ownerOhMsdEh, operatorgRdPLap, {from: accounts[4]});
		const nullnwPK3Ab = await contractXxYyIR.getApproved.call(tokenIdYCxMgrk, {from: accounts[3]});
		const nullCJTZvB5 = await contractXxYyIR.ownerOf.call(tokenIdsMYdzS, {from: accounts[3]});
		await contractXxYyIR.approve.call(toYBD1KZz, tokenIdklsQ6GT, {from: accounts[0]});
	});
})