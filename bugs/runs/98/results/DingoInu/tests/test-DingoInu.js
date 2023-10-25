const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractZQloJRS = await DingoInu.new({from: accounts[4]});
		const tokenOwnerPHS0GUf = accounts[3]
		const tokenOwnerCFHwW5a = accounts[2]
		const tokenOwner1Mvq8F = accounts[4]
		const tokenOwnerbQFJPh = accounts[0]
		const tokensScHQ1cK = BigInt("2013")
		const spenderOlJKIip = accounts[1]
		const balanceTtcQDh = await contractZQloJRS.balanceOf.call(tokenOwnerPHS0GUf, {from: accounts[4]});
		const balanceTCc8zeP = await contractZQloJRS.balanceOf.call(tokenOwnerCFHwW5a, {from: accounts[4]});
		const balanceVB5V3f = await contractZQloJRS.balanceOf.call(tokenOwner1Mvq8F, {from: accounts[2]});
		const balanceGEPmvq = await contractZQloJRS.balanceOf.call(tokenOwnerbQFJPh, {from: accounts[1]});
		const successVwcT6yq = await contractZQloJRS.approve.call(spenderOlJKIip, tokensScHQ1cK, {from: accounts[1]});
		const nullWBA936I = await contractZQloJRS.totalSupply.call({from: accounts[2]});

		assert.equal(balanceGEPmvq, 0)
		assert.equal(balanceTCc8zeP, 0)
		assert.equal(balanceTtcQDh, 0)
		assert.equal(balanceVB5V3f, 1000000000000000000000000000000)
		assert.equal(nullWBA936I, 1000000000000000000000000000000)
		assert.equal(successVwcT6yq, true)
	});

	it('test for DingoInu', async () => {
		const contractRSBpFXw = await DingoInu.new({from: accounts[3]});
		const tokenOwnerZDweMV = accounts[5]
		const tokensDWFZb3y = BigInt("2005")
		const toK4l4WXo = accounts[1]
		const tokenOwnerl8t6362 = accounts[0]
		const balanceWYjDwOR = await contractRSBpFXw.balanceOf.call(tokenOwnerZDweMV, {from: accounts[4]});
		const successJOdIED = await contractRSBpFXw.transfer.call(toK4l4WXo, tokensDWFZb3y, {from: accounts[0]});
		const balancexDFxCe8 = await contractRSBpFXw.balanceOf.call(tokenOwnerl8t6362, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceWYjDwOR, 0)
		await expect(contractRSBpFXw.transfer.call(toK4l4WXo, tokensDWFZb3y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractXLUsQKR = await DingoInu.new({from: accounts[3]});
		const tokensb8ha6ly = BigInt("1678")
		const toPcxBOUK = accounts[2]
		const fromw6GMSEH = accounts[4]
		const tokensaTXPjL = BigInt("302")
		const toF5t5QYP = accounts[3]
		const successGrup0nI = await contractXLUsQKR.transferFrom.call(fromw6GMSEH, toPcxBOUK, tokensb8ha6ly, {from: accounts[2]});
		const successYLwO2IL = await contractXLUsQKR.transfer.call(toF5t5QYP, tokensaTXPjL, {from: accounts[1]});

		await expect(contractXLUsQKR.transferFrom.call(fromw6GMSEH, toPcxBOUK, tokensb8ha6ly, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractzpWMs0g = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensrm497S4 = BigInt("578")
		const toST0hA00 = accounts[0]
		const tokensCu6fUne = BigInt("279")
		const toqJcKaDv = accounts[0]
		const froml6F3aTN = accounts[0]
		const tokensGEr61JR = BigInt("402")
		const spenderUXVwyJ9 = "0x0000000000000000000000000000000000000001"
		const tokensV7gwa3d = BigInt("1292")
		const spenderIZ8lVAT = accounts[3]
		const tokenOwnerXCcfVBn = accounts[4]
		const successL7zeymR = await contractzpWMs0g.transfer.call(toST0hA00, tokensrm497S4, {from: accounts[2]});
		const successgWt9Oc0 = await contractzpWMs0g.transferFrom.call(froml6F3aTN, toqJcKaDv, tokensCu6fUne, {from: accounts[1]});
		const successaG6pVQi = await contractzpWMs0g.approve.call(spenderUXVwyJ9, tokensGEr61JR, {from: accounts[5]});
		const successSb0ZLsm = await contractzpWMs0g.approve.call(spenderIZ8lVAT, tokensV7gwa3d, {from: accounts[2]});
		const balancegQNG1mZ = await contractzpWMs0g.balanceOf.call(tokenOwnerXCcfVBn, {from: accounts[5]});
	});

	it('test for DingoInu', async () => {
		const contractERKf4LI = await DingoInu.new({from: accounts[1]});
		const spenderEMrCZy1 = accounts[1]
		const tokenOwnerxK6X96y = "0x0000000000000000000000000000000000000001"
		const tokensSVnAcEV = BigInt("1058")
		const spenderMsLIjR = accounts[0]
		const tokenOwnerbExMKz6 = accounts[3]
		const remainingLrhqTWU = await contractERKf4LI.allowance.call(tokenOwnerxK6X96y, spenderEMrCZy1, {from: accounts[2]});
		const successawZkxhS = await contractERKf4LI.approve.call(spenderMsLIjR, tokensSVnAcEV, {from: accounts[1]});
		const balancec9dAdZq = await contractERKf4LI.balanceOf.call(tokenOwnerbExMKz6, {from: accounts[1]});

		assert.equal(balancec9dAdZq, 0)
		assert.equal(remainingLrhqTWU, 0)
		assert.equal(successawZkxhS, true)
	});

	it('test for DingoInu', async () => {
		const contractlbroE3 = await DingoInu.new({from: accounts[3]});
		const tokenOwnerdh5mN3C = accounts[5]
		const tokenspnVGMie = BigInt("1670")
		const tolxnMqnr = accounts[1]
		const tokensU7ucGzy = BigInt("2005")
		const tokkT8AW2 = accounts[1]
		const tokenOwnerYZhv6CH = accounts[0]
		const balanceiwhZJQO = await contractlbroE3.balanceOf.call(tokenOwnerdh5mN3C, {from: accounts[4]});
		const successtryq32x = await contractlbroE3.transfer.call(tolxnMqnr, tokenspnVGMie, {from: accounts[3]});
		const successPqI0D8i = await contractlbroE3.transfer.call(tokkT8AW2, tokensU7ucGzy, {from: accounts[0]});
		const balanceQ5YlKZO = await contractlbroE3.balanceOf.call(tokenOwnerYZhv6CH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceiwhZJQO, 0)
		assert.equal(successtryq32x, true)
		await expect(contractlbroE3.transfer.call(tokkT8AW2, tokensU7ucGzy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})