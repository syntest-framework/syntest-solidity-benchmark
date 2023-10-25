const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractDzzeuFI = await DingoInu.new({from: accounts[4]});
		const tokensw8h45vM = BigInt("1861")
		const toyvOU8U6 = accounts[3]
		const fromPFgrSg1 = accounts[0]
		const tokensOof57V = BigInt("1615")
		const spenderVMhgPDj = accounts[2]
		const tokensN64N6Uu = BigInt("1689")
		const too3LNQ92 = "0x0000000000000000000000000000000000000001"
		const fromAUA3IK = accounts[1]
		const tokensPLdD85 = BigInt("1097")
		const toTRovbxs = accounts[2]
		const tokenOwnerI7JhOAD = accounts[0]
		const tokensnUrr0J7 = BigInt("947")
		const toNg8unT = accounts[2]
		const successJDB7Nic = await contractDzzeuFI.transferFrom.call(fromPFgrSg1, toyvOU8U6, tokensw8h45vM, {from: accounts[4]});
		const successsusftU = await contractDzzeuFI.approve.call(spenderVMhgPDj, tokensOof57V, {from: accounts[2]});
		const successIcdHo4c = await contractDzzeuFI.transferFrom.call(fromAUA3IK, too3LNQ92, tokensN64N6Uu, {from: accounts[3]});
		const successXzRIPCw = await contractDzzeuFI.transfer.call(toTRovbxs, tokensPLdD85, {from: accounts[1]});
		const balanceZqms8t = await contractDzzeuFI.balanceOf.call(tokenOwnerI7JhOAD, {from: accounts[1]});
		const successTTuAEjd = await contractDzzeuFI.transfer.call(toNg8unT, tokensnUrr0J7, {from: accounts[1]});

		await expect(contractDzzeuFI.transferFrom.call(fromPFgrSg1, toyvOU8U6, tokensw8h45vM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractp4uu4z = await DingoInu.new({from: accounts[2]});
		const tokenOwnerek7n34B = accounts[3]
		const tokensCLae6wJ = BigInt("1930")
		const todKQAAP = accounts[3]
		const tokensi7s4DfR = BigInt("1995")
		const tobKO6jUA = accounts[3]
		const fromfBylzZg = accounts[3]
		const tokenstauMLRb = BigInt("224")
		const toQ1rXACb = accounts[4]
		const balanceuHK0Nie = await contractp4uu4z.balanceOf.call(tokenOwnerek7n34B, {from: accounts[3]});
		const successgPGd9HB = await contractp4uu4z.transfer.call(todKQAAP, tokensCLae6wJ, {from: accounts[2]});
		const successMAzBHeo = await contractp4uu4z.transferFrom.call(fromfBylzZg, tobKO6jUA, tokensi7s4DfR, {from: accounts[2]});
		const successnjGNYSh = await contractp4uu4z.transfer.call(toQ1rXACb, tokenstauMLRb, {from: accounts[4]});

		assert.equal(balanceuHK0Nie, 0)
		assert.equal(successgPGd9HB, true)
		await expect(contractp4uu4z.transferFrom.call(fromfBylzZg, tobKO6jUA, tokensi7s4DfR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractfZM8HPw = await DingoInu.new({from: accounts[3]});
		const spenderv6Z6rum = "0x0000000000000000000000000000000000000001"
		const tokenOwnerjSSIyhK = accounts[1]
		const tokensTbQ7X7J = BigInt("2011")
		const spenderchbZdjS = "0x0000000000000000000000000000000000000001"
		const tokenswugiPB = BigInt("89")
		const spenderiQ61Wz = accounts[3]
		const nullKKbAcZA = await contractfZM8HPw.totalSupply.call({from: accounts[5]});
		const remainingPnOqWW = await contractfZM8HPw.allowance.call(tokenOwnerjSSIyhK, spenderv6Z6rum, {from: accounts[1]});
		const successmDBCxxV = await contractfZM8HPw.approve.call(spenderchbZdjS, tokensTbQ7X7J, {from: accounts[1]});
		const successhr9YG8 = await contractfZM8HPw.approve.call(spenderiQ61Wz, tokenswugiPB, {from: accounts[3]});
		const nullusU9vU = await contractfZM8HPw.totalSupply.call({from: accounts[1]});

		assert.equal(nullKKbAcZA, 1000000000000000000000000000000)
		assert.equal(nullusU9vU, 1000000000000000000000000000000)
		assert.equal(remainingPnOqWW, 0)
		assert.equal(successhr9YG8, true)
		assert.equal(successmDBCxxV, true)
	});

	it('test for DingoInu', async () => {
		const contractj8AfB4r = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensfcnsYkS = BigInt("910")
		const tosWJjKEW = accounts[4]
		const tokensonaFCWc = BigInt("1828")
		const spendernNUFjjp = accounts[1]
		const nullm7EjLxz = await contractj8AfB4r.totalSupply.call({from: accounts[3]});
		const successKxW1RIG = await contractj8AfB4r.transfer.call(tosWJjKEW, tokensfcnsYkS, {from: accounts[2]});
		const successLxNi45k = await contractj8AfB4r.approve.call(spendernNUFjjp, tokensonaFCWc, {from: accounts[4]});
		const nullmAm5U8L = await contractj8AfB4r.totalSupply.call({from: accounts[0]});
	});
})