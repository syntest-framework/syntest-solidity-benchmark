const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractPQDR825 = await MolScribe.new({from: accounts[2]});
		const tokenIdWlFKNA5 = BigInt("220")
		const tokenAddressVG8gaIo = accounts[4]
		const communityAddressYrorN8 = accounts[3]
		const tokenIdNUk3QcF = BigInt("1346")
		const tokenAddressg4TXgaV = accounts[4]
		const tokenIdBbX4eLX = BigInt("1852")
		const tokenAddressSLCnK17 = accounts[2]
		const _molFeeQtIMGW1 = BigInt("1893")
		const null4MRx9M = await contractPQDR825.getTokenKey.call(tokenAddressVG8gaIo, tokenIdWlFKNA5, {from: "0x0000000000000000000000000000000000000001"});
		await contractPQDR825.giftLexART.call(tokenAddressg4TXgaV, tokenIdNUk3QcF, communityAddressYrorN8, {from: accounts[4]});
		const nullpxQoLf = await contractPQDR825.getTokenKey.call(tokenAddressSLCnK17, tokenIdBbX4eLX, {from: accounts[1]});
		await contractPQDR825.updateMolFees.call(_molFeeQtIMGW1, {from: accounts[1]});

		assert.equal(null4MRx9M, 0xd6c0611a23c68d88168b0a5ed6a423a6dc168b0c00000000000000000000000000000000000000000000000000000000000000dc)
		await expect(contractPQDR825.giftLexART.call(tokenAddressg4TXgaV, tokenIdNUk3QcF, communityAddressYrorN8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractrKvQLeC = await MolScribe.new({from: accounts[2]});
		const transactionValueNzLz8wL = BigInt("1495")
		const buyerl7FkqVb = accounts[4]
		const tokenIdIWWJtfh = BigInt("270")
		const tokenAddressvLeNaVx = accounts[5]
		const startingRoyaltiesUpQiZRS = BigInt("198")
		const communityAddressavj9ktD = accounts[1]
		const tokenIdXUAHqY = BigInt("1316")
		const tokenAddressHIHf7S9 = accounts[4]
		const transactionValueQnRwXV6 = BigInt("1994")
		const buyerMRl4UYr = accounts[4]
		const tokenIdrryLqiR = BigInt("491")
		const tokenAddressVVo92mH = accounts[1]
		const tokenIde0P8yMW = BigInt("1283")
		const tokenAddressc4kQbQ4 = "0x0000000000000000000000000000000000000001"
		await contractrKvQLeC.makeOffer.call(tokenAddressvLeNaVx, tokenIdIWWJtfh, buyerl7FkqVb, transactionValueNzLz8wL, {from: accounts[1]});
		await contractrKvQLeC.scribeNFT.call(tokenAddressHIHf7S9, tokenIdXUAHqY, communityAddressavj9ktD, startingRoyaltiesUpQiZRS, {from: accounts[3]});
		await contractrKvQLeC.makeOffer.call(tokenAddressVVo92mH, tokenIdrryLqiR, buyerMRl4UYr, transactionValueQnRwXV6, {from: accounts[4]});
		const nullHjb908F = await contractrKvQLeC.getTokenKey.call(tokenAddressc4kQbQ4, tokenIde0P8yMW, {from: accounts[1]});

		await expect(contractrKvQLeC.makeOffer.call(tokenAddressvLeNaVx, tokenIdIWWJtfh, buyerl7FkqVb, transactionValueNzLz8wL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfPHA1N = await MolScribe.new({from: accounts[1]});
		const _molBankcT4UFuD = accounts[1]
		const startingRoyaltiesYYAC8gX = BigInt("194")
		const communityAddressOlFVReI = accounts[4]
		const tokenIdrUPNWQ5 = BigInt("874")
		const tokenAddressu5uPdtV = accounts[4]
		const startingRoyaltieswpp5E1h = BigInt("156")
		const communityAddressH6iCKGi = accounts[3]
		const tokenIdQHDrPJl = BigInt("2025")
		const tokenAddressuwPDZD = accounts[5]
		await contractfPHA1N.updateMolBank.call(_molBankcT4UFuD, {from: accounts[0]});
		await contractfPHA1N.scribeNFT.call(tokenAddressu5uPdtV, tokenIdrUPNWQ5, communityAddressOlFVReI, startingRoyaltiesYYAC8gX, {from: accounts[0]});
		await contractfPHA1N.scribeNFT.call(tokenAddressuwPDZD, tokenIdQHDrPJl, communityAddressH6iCKGi, startingRoyaltieswpp5E1h, {from: accounts[4]});

		await expect(contractfPHA1N.updateMolBank.call(_molBankcT4UFuD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracts47WfQc = await MolScribe.new({from: accounts[4]});
		const tokenIdxP7DJRJ = BigInt("512")
		const tokenAddresshDL50Gj = accounts[5]
		const tokenIddtX9YqQ = BigInt("665")
		const tokenAddressEP8O0h6 = accounts[2]
		const _molFee4cFqVO = BigInt("621")
		const communityAddressLV8mpN4 = accounts[2]
		const tokenIdWuRFJ4N = BigInt("116")
		const tokenAddressBg3pWiL = accounts[0]
		const tokenIdM3aimKT = BigInt("1156")
		const tokenAddressu2RuKpK = accounts[2]
		await contracts47WfQc.acceptOffer.call(tokenAddresshDL50Gj, tokenIdxP7DJRJ, {from: accounts[0]});
		const nullNpBuOcL = await contracts47WfQc.getTokenKey.call(tokenAddressEP8O0h6, tokenIddtX9YqQ, {from: accounts[3]});
		await contracts47WfQc.updateMolFees.call(_molFee4cFqVO, {from: accounts[4]});
		await contracts47WfQc.giftLexART.call(tokenAddressBg3pWiL, tokenIdWuRFJ4N, communityAddressLV8mpN4, {from: accounts[2]});
		const nullA5k8yEF = await contracts47WfQc.getTokenKey.call(tokenAddressu2RuKpK, tokenIdM3aimKT, {from: accounts[0]});

		await expect(contracts47WfQc.acceptOffer.call(tokenAddresshDL50Gj, tokenIdxP7DJRJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractRZed5yl = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdSriuoss = BigInt("538")
		const tokenAddressrUzihU = accounts[4]
		const tokenIdggLr3n7 = BigInt("1866")
		const tokenAddressAiRolE9 = accounts[0]
		const startingRoyaltiesDPMTfw = BigInt("135")
		const communityAddressByYrF1J = accounts[2]
		const tokenIdB7O0rK = BigInt("1375")
		const tokenAddressRVoivl1 = accounts[3]
		const nulllUGeTcG = await contractRZed5yl.getTokenKey.call(tokenAddressrUzihU, tokenIdSriuoss, {from: accounts[3]});
		await contractRZed5yl.acceptOffer.call(tokenAddressAiRolE9, tokenIdggLr3n7, {from: accounts[0]});
		await contractRZed5yl.scribeNFT.call(tokenAddressRVoivl1, tokenIdB7O0rK, communityAddressByYrF1J, startingRoyaltiesDPMTfw, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractd53uhIi = await MolScribe.new({from: accounts[0]});
		const tokenIdZRQcd7A = BigInt("1548")
		const tokenAddresswcmT1Nc = accounts[4]
		const tokenIdaDoQNDm = BigInt("1033")
		const tokenAddressqTgM8zR = accounts[5]
		const tokenIdCJJcOHc = BigInt("1193")
		const tokenAddressiuIQ9lt = "0x0000000000000000000000000000000000000001"
		const tokenIdCK4Do4K = BigInt("539")
		const tokenAddress53pwiC = accounts[3]
		const nulllalLeAx = await contractd53uhIi.getTokenKey.call(tokenAddresswcmT1Nc, tokenIdZRQcd7A, {from: accounts[0]});
		const nullHaX41Fa = await contractd53uhIi.getTokenKey.call(tokenAddressqTgM8zR, tokenIdaDoQNDm, {from: accounts[1]});
		const nullIbQIjj1 = await contractd53uhIi.getTokenKey.call(tokenAddressiuIQ9lt, tokenIdCJJcOHc, {from: accounts[0]});
		await contractd53uhIi.acceptOffer.call(tokenAddress53pwiC, tokenIdCK4Do4K, {from: accounts[3]});

		assert.equal(nullHaX41Fa, 0xbdcbd97fe3b1ce6dd1671105ec04aa4eb7bfaec80000000000000000000000000000000000000000000000000000000000000409)
		assert.equal(nullIbQIjj1, 0x000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000004a9)
		assert.equal(nulllalLeAx, 0xd6c0611a23c68d88168b0a5ed6a423a6dc168b0c000000000000000000000000000000000000000000000000000000000000060c)
		await expect(contractd53uhIi.acceptOffer.call(tokenAddress53pwiC, tokenIdCK4Do4K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractxgo4uKh = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesjY3m5WU = BigInt("43")
		const communityAddresstFXChdW = accounts[2]
		const tokenIdsGJupHv = BigInt("11")
		const tokenAddressgdzYzMB = accounts[0]
		const _molFZl40X5 = accounts[1]
		const communityAddressTjJfiqI = "0x0000000000000000000000000000000000000001"
		const tokenIdZJ5eEB7 = BigInt("954")
		const tokenAddressOJkRuP7 = accounts[2]
		await contractxgo4uKh.scribeNFT.call(tokenAddressgdzYzMB, tokenIdsGJupHv, communityAddresstFXChdW, startingRoyaltiesjY3m5WU, {from: accounts[3]});
		await contractxgo4uKh.updateMol.call(_molFZl40X5, {from: accounts[1]});
		await contractxgo4uKh.giftLexART.call(tokenAddressOJkRuP7, tokenIdZJ5eEB7, communityAddressTjJfiqI, {from: accounts[0]});

		await expect(contractxgo4uKh.scribeNFT.call(tokenAddressgdzYzMB, tokenIdsGJupHv, communityAddresstFXChdW, startingRoyaltiesjY3m5WU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})