const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringSXE9b0q = "CKq5nRp6qrL"
		const stringIe0CsTH = "6nFyIyq1fWcZJ78fn9oAMO4e3ZmOFFWFLIgFVlkTOWrzArnQcYIQvI"
		const uintVIYLB2o = BigInt("123")
		const ETFXPoolf3y9URr = await ETFXPool.new(stringSXE9b0q, stringIe0CsTH, uintVIYLB2o, {from: accounts[0]});
		const addressPxxjSxY = accounts[1]
		const uintq6wcsfd = BigInt("942")
		const addressJOwQiLm = accounts[4]
		const uintCr1Uef4 = BigInt("1799")
		const addressUUgh6o = accounts[5]
		const addressG2gg2rU = accounts[4]
		const uint8UDlguHI = await ETFXPoolf3y9URr.decimals.call({from: accounts[2]});
		const uint256dIBVwsG = await ETFXPoolf3y9URr.earned.call(addressPxxjSxY, {from: accounts[1]});
		const boolADvQ77 = await ETFXPoolf3y9URr.approve.call(addressJOwQiLm, uintq6wcsfd, {from: "0x0000000000000000000000000000000000000001"});
		const boolmfu9YPQ = await ETFXPoolf3y9URr.transferFrom.call(addressG2gg2rU, addressUUgh6o, uintCr1Uef4, {from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolORLZNXO = await ETFXPool.new({from: accounts[4]});
		const uintduhBh83 = BigInt("506")
		const uintOLrzxb1 = BigInt("1377")
		const addressqtB85M = accounts[0]
		const addressodPNAct = accounts[1]
		const uintMfwYmB8 = BigInt("1029")
		const addresszdKwfXD = accounts[4]
		const uint256lGAv7jY = await ETFXPoolORLZNXO.withdraw.call(uintduhBh83, {from: accounts[0]});
		const boolzA0XuIc = await ETFXPoolORLZNXO.transferFrom.call(addressodPNAct, addressqtB85M, uintOLrzxb1, {from: "0x0000000000000000000000000000000000000001"});
		const string3AVddA = await ETFXPoolORLZNXO.symbol.call({from: accounts[0]});
		const boolb4OaH0v = await ETFXPoolORLZNXO.transfer.call(addresszdKwfXD, uintMfwYmB8, {from: accounts[3]});

		await expect(ETFXPoolORLZNXO.withdraw.call(uintduhBh83, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolMFUpwqw = await ETFXPool.new({from: accounts[5]});
		const uintTFMI90 = BigInt("305")
		const addressuxUlOP = accounts[1]
		const uintwlHKFkF = BigInt("1072")
		const addresswCU4Zup = "0x0000000000000000000000000000000000000001"
		const uint256Ov6B35y = await ETFXPoolMFUpwqw.stake.call(uintTFMI90, {from: accounts[2]});
		const uint256LvscG34 = await ETFXPoolMFUpwqw.earned.call(addressuxUlOP, {from: accounts[0]});
		const booldZHbnRE = await ETFXPoolMFUpwqw.increaseAllowance.call(addresswCU4Zup, uintwlHKFkF, {from: accounts[2]});
		await ETFXPoolMFUpwqw.getReward.call({from: accounts[3]});

		await expect(ETFXPoolMFUpwqw.stake.call(uintTFMI90, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljbglwuD = await ETFXPool.new({from: accounts[3]});
		const uintvt6t1i1 = BigInt("1601")
		const addresswF3wxd = accounts[3]
		const uintq2SMj5Z = BigInt("694")
		const address4b9Y9M = accounts[3]
		const uintmXakhjF = BigInt("1428")
		const addressfTP4Q9P = accounts[4]
		const addressqHy6s66 = accounts[0]
		const uintkJMo7HP = BigInt("1147")
		const uintka94b1g = BigInt("399")
		const addressaCdQs21 = "0x0000000000000000000000000000000000000001"
		const addressWTOJaoe = "0x0000000000000000000000000000000000000001"
		const booldTYDKec = await ETFXPooljbglwuD.transfer.call(addresswF3wxd, uintvt6t1i1, {from: accounts[2]});
		const boolNMZoTOY = await ETFXPooljbglwuD.decreaseAllowance.call(address4b9Y9M, uintq2SMj5Z, {from: accounts[0]});
		const boolwePjRS = await ETFXPooljbglwuD.decreaseAllowance.call(addressfTP4Q9P, uintmXakhjF, {from: accounts[1]});
		const uint2560U3DZ0 = await ETFXPooljbglwuD.earned.call(addressqHy6s66, {from: accounts[1]});
		const uint256K3o0g2q = await ETFXPooljbglwuD.withdraw.call(uintkJMo7HP, {from: accounts[3]});
		const boolY2pbUYp = await ETFXPooljbglwuD.transferFrom.call(addressWTOJaoe, addressaCdQs21, uintka94b1g, {from: accounts[3]});

		await expect(ETFXPooljbglwuD.transfer.call(addresswF3wxd, uintvt6t1i1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyB3GEp1 = await ETFXPool.new({from: accounts[1]});
		const addressOSHspA9 = accounts[0]
		await ETFXPoolyB3GEp1.onlyOwner.call({from: accounts[3]});
		const uint256rFRh2tE = await ETFXPoolyB3GEp1.balanceOf.call(addressOSHspA9, {from: accounts[4]});

		await expect(ETFXPoolyB3GEp1.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintzqJg2lA = BigInt("10")
		const addressRy6jtcs = accounts[3]
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressRy6jtcs, uintzqJg2lA, {from: accounts[1]});
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});

		await expect(ETFXPoolbEIVLwJ.decreaseAllowance.call(addressRy6jtcs, uintzqJg2lA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintXeYGt8m = BigInt("1037")
		const addressWLLmRdE = accounts[4]
		await ETFXPoolbEIVLwJ.exit.call({from: accounts[1]});
		const booljWqlyBY = await ETFXPoolbEIVLwJ.transfer.call(addressWLLmRdE, uintXeYGt8m, {from: accounts[0]});
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});
		const uint8c0CDDqV = await ETFXPoolbEIVLwJ.decimals.call({from: accounts[2]});

		await expect(ETFXPoolbEIVLwJ.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});

		assert.equal(addressNgrVSHE, 0x85b038F1ABB5fc3D2E211cC4d3c9af22Bd2550f2)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintLggl6pn = BigInt("1150")
		const addressN2qWHCd = accounts[3]
		const addressz0YV1dG = accounts[4]
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});
		const boolUJUhGEl = await ETFXPoolbEIVLwJ.transferFrom.call(addressz0YV1dG, addressN2qWHCd, uintLggl6pn, {from: accounts[0]});
		await ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressNgrVSHE, 0x85b038F1ABB5fc3D2E211cC4d3c9af22Bd2550f2)
		await expect(ETFXPoolbEIVLwJ.transferFrom.call(addressz0YV1dG, addressN2qWHCd, uintLggl6pn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintbNlEEuB = BigInt("10")
		const addressMK3vC6m = accounts[3]
		const addressRXkHi5f = accounts[0]
		await ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[0]});
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressMK3vC6m, uintbNlEEuB, {from: accounts[1]});
		await ETFXPoolbEIVLwJ.nonReentrant.call({from: accounts[1]});
		const uint256ElNceQ = await ETFXPoolbEIVLwJ.earned.call(addressRXkHi5f, {from: accounts[3]});
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});

		await expect(ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});
		await ETFXPoolbEIVLwJ.getReward.call({from: accounts[4]});
		const uint8QIUIszu = await ETFXPoolbEIVLwJ.decimals.call({from: accounts[2]});

		assert.equal(addressNgrVSHE, 0x85b038F1ABB5fc3D2E211cC4d3c9af22Bd2550f2)
		await expect(ETFXPoolbEIVLwJ.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintasXiMJf = BigInt("0")
		const addressbFwE7I4 = accounts[3]
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressbFwE7I4, uintasXiMJf, {from: accounts[1]});

		assert.equal(boolFjvTFHo, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintYLhyXzy = BigInt("984")
		const addressUzLiVGx = accounts[0]
		const uintrEgSTBl = BigInt("0")
		const addressZmXGhbI = accounts[3]
		const bool75ACIX = await ETFXPoolbEIVLwJ.approve.call(addressUzLiVGx, uintYLhyXzy, {from: accounts[5]});
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressZmXGhbI, uintrEgSTBl, {from: accounts[1]});

		assert.equal(bool75ACIX, true)
		assert.equal(boolFjvTFHo, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolj43HNkl = await ETFXPool.new({from: accounts[4]});
		const addressfS4sozW = accounts[4]
		const addressit7h7Yt = accounts[1]
		const uintPcQcCrE = BigInt("1927")
		const addressUeGqDHX = "0x0000000000000000000000000000000000000001"
		const uintpGQFpil = BigInt("173")
		const addresspauMT7n = accounts[4]
		const uint256QcQbCEk = await ETFXPoolj43HNkl.rewardPerToken.call({from: accounts[4]});
		const uint256VNs2LOJ = await ETFXPoolj43HNkl.allowance.call(addressit7h7Yt, addressfS4sozW, {from: accounts[0]});
		const boolAFy0tW4 = await ETFXPoolj43HNkl.approve.call(addressUeGqDHX, uintPcQcCrE, {from: accounts[4]});
		const booliuqpgfY = await ETFXPoolj43HNkl.decreaseAllowance.call(addresspauMT7n, uintpGQFpil, {from: accounts[2]});

		assert.equal(boolAFy0tW4, true)
		assert.equal(uint256QcQbCEk, BigInt("0"))
		assert.equal(uint256VNs2LOJ, BigInt("0"))
		await expect(ETFXPoolj43HNkl.decreaseAllowance.call(addresspauMT7n, uintpGQFpil, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolj43HNkl = await ETFXPool.new({from: accounts[4]});
		const addressZ2SkpuW = accounts[4]
		const addressokphmti = accounts[1]
		const uintiKRLGGY = BigInt("1927")
		const addresst2AWDbE = "0x0000000000000000000000000000000000000000"
		const uintQkyrry = BigInt("173")
		const addressO3ifEF = accounts[4]
		const uint256QcQbCEk = await ETFXPoolj43HNkl.rewardPerToken.call({from: accounts[4]});
		const uint256VNs2LOJ = await ETFXPoolj43HNkl.allowance.call(addressokphmti, addressZ2SkpuW, {from: accounts[0]});
		const boolAFy0tW4 = await ETFXPoolj43HNkl.approve.call(addresst2AWDbE, uintiKRLGGY, {from: accounts[4]});
		const booliuqpgfY = await ETFXPoolj43HNkl.decreaseAllowance.call(addressO3ifEF, uintQkyrry, {from: accounts[2]});

		assert.equal(uint256QcQbCEk, BigInt("0"))
		assert.equal(uint256VNs2LOJ, BigInt("0"))
		await expect(ETFXPoolj43HNkl.approve.call(addresst2AWDbE, uintiKRLGGY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooloEyRwL5 = await ETFXPool.new({from: accounts[4]});
		const uint8OjlebjV = await ETFXPooloEyRwL5.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPooloEyRwL5.getReward.call({from: accounts[5]});
		await ETFXPooloEyRwL5.renounceOwnership.call({from: accounts[1]});
		const stringPbLdD4p = await ETFXPooloEyRwL5.name.call({from: accounts[2]});

		assert.equal(uint8OjlebjV, BigInt("8"))
		await expect(ETFXPooloEyRwL5.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const addressqhdSxgY = accounts[4]
		const uintxEizAZY = BigInt("1963")
		const addressTFNcJVB = accounts[3]
		const addressJvEdzDD = await ETFXPoolbEIVLwJ.transferOwnership.call(addressqhdSxgY, {from: accounts[2]});
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressTFNcJVB, uintxEizAZY, {from: accounts[1]});
		await ETFXPoolbEIVLwJ.onlyOwner.call({from: accounts[5]});

		await expect(ETFXPoolbEIVLwJ.decreaseAllowance.call(addressTFNcJVB, uintxEizAZY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleRQVbni = await ETFXPool.new({from: accounts[5]});
		const addressLtioU1o = accounts[0]
		const addressu84L1N = accounts[2]
		const string00duMK = await ETFXPooleRQVbni.symbol.call({from: accounts[1]});
		const uint256ncCAbYg = await ETFXPooleRQVbni.allowance.call(addressu84L1N, addressLtioU1o, {from: accounts[1]});

		assert.equal(string00duMK, "FETFX")
		assert.equal(uint256ncCAbYg, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintsokrvSv = BigInt("1620")
		const addressbZhAxT = accounts[4]
		const uintFnxod47 = BigInt("0")
		const addressRUcgqN = accounts[4]
		const boolojFiSD = await ETFXPoolbEIVLwJ.increaseAllowance.call(addressbZhAxT, uintsokrvSv, {from: accounts[0]});
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressRUcgqN, uintFnxod47, {from: accounts[1]});

		assert.equal(boolFjvTFHo, true)
		assert.equal(boolojFiSD, true)
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintwSHeeN6 = BigInt("8")
		const addressDNq9JqV = accounts[3]
		const addresssGBJBtD = await ETFXPoolbEIVLwJ.owner.call({from: accounts[5]});
		const stringdouDX2x = await ETFXPoolbEIVLwJ.name.call({from: accounts[0]});
		const boolFjvTFHo = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressDNq9JqV, uintwSHeeN6, {from: accounts[1]});

		assert.equal(addresssGBJBtD, 0x85b038F1ABB5fc3D2E211cC4d3c9af22Bd2550f2)
		assert.equal(stringdouDX2x, "ETFX-FARM")
		await expect(ETFXPoolbEIVLwJ.decreaseAllowance.call(addressDNq9JqV, uintwSHeeN6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpat6cEg = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLMRY5lR = BigInt("548")
		const uintDEyfUG9 = BigInt("584")
		const addressoxVEMmu = accounts[5]
		const uinteUKKUrY = BigInt("986")
		const addressMur4Ixw = "0x0000000000000000000000000000000000000001"
		const uintt7z5FnF = BigInt("1884")
		const uint256RAgfmv6 = await ETFXPoolpat6cEg.withdraw.call(uintLMRY5lR, {from: accounts[2]});
		const boolPs4hCEl = await ETFXPoolpat6cEg.approve.call(addressoxVEMmu, uintDEyfUG9, {from: accounts[0]});
		const boolJFzk3QD = await ETFXPoolpat6cEg.increaseAllowance.call(addressMur4Ixw, uinteUKKUrY, {from: accounts[2]});
		const uint2567ONKMi = await ETFXPoolpat6cEg.withdraw.call(uintt7z5FnF, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbEIVLwJ = await ETFXPool.new({from: accounts[2]});
		const uintV2V0Szs = BigInt("585")
		const addressmSobeNY = accounts[1]
		const addressNgrVSHE = await ETFXPoolbEIVLwJ.owner.call({from: accounts[0]});
		await ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[2]});
		await ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[4]});
		const boollJJsyv4 = await ETFXPoolbEIVLwJ.decreaseAllowance.call(addressmSobeNY, uintV2V0Szs, {from: accounts[2]});

		assert.equal(addressNgrVSHE, 0x85b038F1ABB5fc3D2E211cC4d3c9af22Bd2550f2)
		await expect(ETFXPoolbEIVLwJ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})