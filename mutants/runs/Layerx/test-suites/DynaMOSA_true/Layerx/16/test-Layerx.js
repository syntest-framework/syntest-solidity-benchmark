const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressQ6KEZn2 = accounts[4]
		const LayerxKBGwZSL = await Layerx.new(addressQ6KEZn2, {from: accounts[4]});
		const boolpQQa5u = false
		const uintXJlflD1 = BigInt("285")
		const addressslygN46 = accounts[4]
		await LayerxKBGwZSL.unlock.call({from: accounts[4]});
		const uintwLBzSuw = await LayerxKBGwZSL.getStakesNum.call({from: accounts[3]});
		const boolCiTkl99 = await LayerxKBGwZSL.setIsPaused.call(boolpQQa5u, {from: accounts[0]});
		const boolyWV1Um1 = await LayerxKBGwZSL.approve.call(addressslygN46, uintXJlflD1, {from: accounts[1]});

		await expect(LayerxKBGwZSL.unlock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressPI0EC5P = accounts[4]
		const LayerxX5Z0Cna = await Layerx.new(addressPI0EC5P, {from: accounts[5]});
		const addressP9ZCYo4 = accounts[3]
		const addressl6QTIxH = accounts[3]
		await LayerxX5Z0Cna.paused.call({from: accounts[3]});
		const addressNa1qddY = await LayerxX5Z0Cna.setNewStakeCreator.call(addressP9ZCYo4, {from: accounts[2]});
		const uintjREl4h4 = await LayerxX5Z0Cna.balanceOf.call(addressl6QTIxH, {from: accounts[2]});
		await LayerxX5Z0Cna.unlock.call({from: accounts[0]});

		await expect(LayerxX5Z0Cna.paused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQmRuFu3 = accounts[5]
		const LayerxW2aKttX = await Layerx.new(addressQmRuFu3, {from: accounts[0]});
		const uinthvrtTeU = BigInt("1197")
		const addressBbEZ1LU = accounts[1]
		const addressATt1WYV = accounts[3]
		const uintPfQzxn4 = BigInt("1012")
		const addressmJylZLO = accounts[1]
		const uintUSCGNBb = BigInt("1057")
		const uintCp9nYEc = await LayerxW2aKttX.lock.call(uinthvrtTeU, {from: accounts[3]});
		const uintExHzW81 = await LayerxW2aKttX.allowance.call(addressATt1WYV, addressBbEZ1LU, {from: accounts[5]});
		const boolJNCOgg8 = await LayerxW2aKttX.approve.call(addressmJylZLO, uintPfQzxn4, {from: "0x0000000000000000000000000000000000000001"});
		const uintEyoX0vz = await LayerxW2aKttX.withdraw.call(uintUSCGNBb, {from: accounts[1]});

		await expect(LayerxW2aKttX.lock.call(uinthvrtTeU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresstyzn8fv = accounts[3]
		const LayerxsDEIgmX = await Layerx.new(addresstyzn8fv, {from: accounts[0]});
		const byteyYLiQfB = "0x1f060f"
		const uint7Z2dTx = BigInt("1875")
		const addressv0a0z4b = accounts[1]
		const addressmrZ1BQq = accounts[4]
		const uintDvR8aXP = BigInt("1865")
		const booldhS5EhD = await LayerxsDEIgmX.approveAndCall.call(addressv0a0z4b, uint7Z2dTx, byteyYLiQfB, {from: accounts[1]});
		await LayerxsDEIgmX.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxsDEIgmX.paused.call({from: accounts[4]});
		await LayerxsDEIgmX.paused.call({from: accounts[0]});
		const addresszCltBzt = await LayerxsDEIgmX.setNewStakeCreator.call(addressmrZ1BQq, {from: accounts[3]});
		const uintVIYl7Q = await LayerxsDEIgmX.withdraw.call(uintDvR8aXP, {from: accounts[5]});

		await expect(LayerxsDEIgmX.approveAndCall.call(addressv0a0z4b, uint7Z2dTx, byteyYLiQfB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressx3LefaY = accounts[0]
		const LayerxSpLjLEp = await Layerx.new(addressx3LefaY, {from: "0x0000000000000000000000000000000000000001"});
		const uintzVX2Eci = BigInt("1506")
		const uint0qN1SM = BigInt("1430")
		const address1fjVNN = accounts[4]
		const uintx6Dva0f = BigInt("1767")
		const uintwabXHdT = await LayerxSpLjLEp.withdraw.call(uintzVX2Eci, {from: accounts[4]});
		await LayerxSpLjLEp.unlock.call({from: accounts[1]});
		const boolj8zA8pF = await LayerxSpLjLEp.approve.call(address1fjVNN, uint0qN1SM, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxSpLjLEp.unlock.call({from: accounts[3]});
		const uint256kCnAq7m = await LayerxSpLjLEp.burn.call(uintx6Dva0f, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const address6e0FuR = accounts[4]
		const LayerxKBGwZSL = await Layerx.new(address6e0FuR, {from: accounts[4]});
		const uintMeR2zhG = BigInt("1687")
		const addressnArB8Tc = accounts[3]
		const uintptPYu0h = BigInt("260")
		const boolpQQa5u = false
		const uintwIkYL6N = BigInt("315")
		const addressmKgypF6 = accounts[4]
		const uintQXH9VJ = BigInt("419")
		const boolhbazW7n = await LayerxKBGwZSL.transfer.call(addressnArB8Tc, uintMeR2zhG, {from: accounts[4]});
		const uint256jLXJRi4 = await LayerxKBGwZSL.burn.call(uintptPYu0h, {from: accounts[1]});
		await LayerxKBGwZSL.unlock.call({from: accounts[4]});
		const uintwLBzSuw = await LayerxKBGwZSL.getStakesNum.call({from: accounts[3]});
		const boolCiTkl99 = await LayerxKBGwZSL.setIsPaused.call(boolpQQa5u, {from: accounts[0]});
		const boolyWV1Um1 = await LayerxKBGwZSL.approve.call(addressmKgypF6, uintwIkYL6N, {from: accounts[1]});
		const uintFLamWtp = await LayerxKBGwZSL.exist.call(uintQXH9VJ, {from: accounts[0]});

		assert.equal(boolhbazW7n, true)
		await expect(LayerxKBGwZSL.burn.call(uintptPYu0h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressALbLqfJ = accounts[0]
		const LayerxfUA509f = await Layerx.new(addressALbLqfJ, {from: accounts[4]});
		const addressLxEN5z = accounts[3]
		const addressnrKlSZe = accounts[0]
		const uintZLjrvD7 = BigInt("162")
		const uintpWwYUjA = await LayerxfUA509f.totalSupply.call({from: accounts[2]});
		const uintyRu0iOI = await LayerxfUA509f.allowance.call(addressnrKlSZe, addressLxEN5z, {from: accounts[2]});
		const uint256cTaZSi7 = await LayerxfUA509f.burn.call(uintZLjrvD7, {from: accounts[2]});
		await LayerxfUA509f.unlock.call({from: accounts[1]});

		assert.equal(uintpWwYUjA, BigInt("40000000000000000000000"))
		assert.equal(uintyRu0iOI, BigInt("0"))
		await expect(LayerxfUA509f.burn.call(uintZLjrvD7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressuirwN15 = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addressuirwN15, {from: accounts[1]});
		const uintcIbQczM = BigInt("1256")
		const uintnvG7IU = BigInt("1315")
		const uintpuPvrX = await Layerxazr3nNE.withdraw.call(uintcIbQczM, {from: accounts[2]});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uintHmp1RU = await Layerxazr3nNE.lock.call(uintnvG7IU, {from: accounts[0]});
		await Layerxazr3nNE.addStakePayment.call({from: accounts[3]});

		await expect(Layerxazr3nNE.withdraw.call(uintcIbQczM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresshh4Tmuj = accounts[4]
		const LayerxserX26V = await Layerx.new(addresshh4Tmuj, {from: accounts[2]});
		await LayerxserX26V.addStakePayment.call({from: accounts[2]});
		const uintMyDTmFG = await LayerxserX26V.totalSupply.call({from: accounts[4]});
		await LayerxserX26V.paused.call({from: accounts[5]});

		await expect(LayerxserX26V.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressvmwJvwX = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addressvmwJvwX, {from: accounts[1]});
		const uintHLtwYZh = BigInt("1999")
		const addressA2G4jBP = accounts[1]
		const uintYvo5H8d = BigInt("94")
		const addressfBXwUB6 = accounts[1]
		const uint256LxZTzxA = await Layerxazr3nNE.burn.call(uintHLtwYZh, {from: accounts[1]});
		const addressohWGWJ = await Layerxazr3nNE.setNewStakeCreator.call(addressA2G4jBP, {from: "0x0000000000000000000000000000000000000001"});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGL558FM = await Layerxazr3nNE.approve.call(addressfBXwUB6, uintYvo5H8d, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerxazr3nNE.setNewStakeCreator.call(addressA2G4jBP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskpTSl7R = accounts[0]
		const LayerxfUA509f = await Layerx.new(addresskpTSl7R, {from: accounts[4]});
		const uintwY2ASlF = BigInt("594")
		const addressoLT4exd = "0x0000000000000000000000000000000000000001"
		const addressW2iSHay = accounts[2]
		const uintBBftRHb = BigInt("45")
		const boolkmRLylz = await LayerxfUA509f.transfer.call(addressoLT4exd, uintwY2ASlF, {from: "0x0000000000000000000000000000000000000001"});
		const addressyl03Iji = await LayerxfUA509f.transferOwnership.call(addressW2iSHay, {from: accounts[4]});
		const uintrjnWkQ2 = await LayerxfUA509f.lock.call(uintBBftRHb, {from: accounts[2]});
		await LayerxfUA509f.unlock.call({from: accounts[1]});

		await expect(LayerxfUA509f.transfer.call(addressoLT4exd, uintwY2ASlF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskhUZKtC = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addresskhUZKtC, {from: accounts[1]});
		const addressAyFSnnE = "0x0000000000000000000000000000000000000001"
		const uintOkXyMW = await Layerxazr3nNE.balanceOf.call(addressAyFSnnE, {from: accounts[2]});
		await Layerxazr3nNE.paused.call({from: accounts[1]});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintOkXyMW, BigInt("0"))
		await expect(Layerxazr3nNE.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKqo9F1 = accounts[0]
		const LayerxfUA509f = await Layerx.new(addressKqo9F1, {from: accounts[4]});
		const uintyJ7Z57z = BigInt("28")
		const addressETfbFEq = accounts[5]
		const addressTjGqYZ5 = accounts[4]
		await LayerxfUA509f.addStakePayment.call({from: accounts[0]});
		const uintrjnWkQ2 = await LayerxfUA509f.lock.call(uintyJ7Z57z, {from: accounts[2]});
		await LayerxfUA509f.addStakePayment.call({from: accounts[2]});
		const uintpWwYUjA = await LayerxfUA509f.totalSupply.call({from: accounts[2]});
		const uintQWOobG7 = await LayerxfUA509f.allowance.call(addressTjGqYZ5, addressETfbFEq, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxfUA509f.unlock.call({from: accounts[1]});

		await expect(LayerxfUA509f.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszvPxoK4 = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addresszvPxoK4, {from: accounts[1]});
		const uintcCOA7Y = BigInt("1369")
		const addressi80QiJq = accounts[1]
		const uintiQjDPPe = BigInt("1478")
		const boolBAs1y2a = await Layerxazr3nNE.approve.call(addressi80QiJq, uintcCOA7Y, {from: accounts[4]});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uintaWIiuRk = await Layerxazr3nNE.getStakesNum.call({from: accounts[2]});
		const uintXPXMVjx = await Layerxazr3nNE.exist.call(uintiQjDPPe, {from: accounts[0]});

		assert.equal(boolBAs1y2a, true)
		await expect(Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressglmLCrz = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addressglmLCrz, {from: accounts[1]});
		await Layerxazr3nNE.f.call({from: accounts[1]});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerxazr3nNE.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressey6XQpA = accounts[2]
		const Layerx2VoHfE = await Layerx.new(addressey6XQpA, {from: accounts[5]});
		const boolnjTwQQz = false
		const uinte6x28N9 = BigInt("1573")
		const uintuch74Gv = BigInt("355")
		const addressjN2XXq5 = accounts[4]
		const addresszZSxnYd = accounts[4]
		const boolO0PWGFO = await Layerx2VoHfE.setIsPaused.call(boolnjTwQQz, {from: accounts[2]});
		const uinttefDoz6 = await Layerx2VoHfE.exist.call(uinte6x28N9, {from: accounts[2]});
		const uintRPf7mf = await Layerx2VoHfE.withdraw.call(uintuch74Gv, {from: accounts[4]});
		const uintuCEfDjU = await Layerx2VoHfE.allowance.call(addresszZSxnYd, addressjN2XXq5, {from: accounts[0]});
		await Layerx2VoHfE.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerx2VoHfE.exist.call(uinte6x28N9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqKNMpgB = accounts[1]
		const Layerxazr3nNE = await Layerx.new(addressqKNMpgB, {from: accounts[1]});
		const uint8aJaWs = BigInt("979")
		const addresswuwUw8k = accounts[2]
		const addressarTT6CB = accounts[2]
		const addressUxaaHZ = accounts[2]
		const boolRngCOOl = await Layerxazr3nNE.transferFrom.call(addressarTT6CB, addresswuwUw8k, uint8aJaWs, {from: accounts[4]});
		const addressFpuqZVo = await Layerxazr3nNE.setNewStakeCreator.call(addressUxaaHZ, {from: accounts[1]});
		await Layerxazr3nNE.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Layerxazr3nNE.transferFrom.call(addressarTT6CB, addresswuwUw8k, uint8aJaWs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressd2mxlMH = accounts[0]
		const LayerxfUA509f = await Layerx.new(addressd2mxlMH, {from: accounts[4]});
		const addressfc72aDH = accounts[0]
		const addressmmMdFi3 = accounts[4]
		const uintT4Ta6q7 = BigInt("793")
		const uintGp6ENCF = BigInt("50")
		const addressaQNEhzv = accounts[5]
		const addressVLRqrZr = accounts[1]
		const uintYn9Raoi = BigInt("402")
		const boolrxQHLaA = false
		const uintDxu2AN8 = await LayerxfUA509f.getStakesNum.call({from: accounts[2]});
		const uintphLNxp6 = await LayerxfUA509f.allowance.call(addressmmMdFi3, addressfc72aDH, {from: accounts[2]});
		await LayerxfUA509f.addStakePayment.call({from: accounts[0]});
		await LayerxfUA509f.unlock.call({from: accounts[4]});
		const uint256luh4sgQ = await LayerxfUA509f.burn.call(uintT4Ta6q7, {from: accounts[0]});
		const uintrjnWkQ2 = await LayerxfUA509f.lock.call(uintGp6ENCF, {from: accounts[2]});
		await LayerxfUA509f.paused.call({from: accounts[0]});
		const uintQWOobG7 = await LayerxfUA509f.allowance.call(addressVLRqrZr, addressaQNEhzv, {from: "0x0000000000000000000000000000000000000001"});
		const uintXSUhHfZ = await LayerxfUA509f.lock.call(uintYn9Raoi, {from: "0x0000000000000000000000000000000000000001"});
		const boolEY12sHZ = await LayerxfUA509f.setIsPaused.call(boolrxQHLaA, {from: accounts[2]});
		await LayerxfUA509f.unlock.call({from: accounts[1]});

		assert.equal(uintDxu2AN8, BigInt("1"))
		assert.equal(uintphLNxp6, BigInt("0"))
		await expect(LayerxfUA509f.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTM5F6fO = accounts[0]
		const LayerxfUA509f = await Layerx.new(addressTM5F6fO, {from: accounts[4]});
		const uintwW50Lw = BigInt("0")
		const addresssRUzuF0 = accounts[5]
		const addressmTgXqeh = accounts[4]
		await LayerxfUA509f.addStakePayment.call({from: accounts[0]});
		await LayerxfUA509f.f.call({from: accounts[2]});
		const uintrjnWkQ2 = await LayerxfUA509f.lock.call(uintwW50Lw, {from: accounts[2]});
		const uintfsVgRaQ = await LayerxfUA509f.totalSupply.call({from: accounts[1]});
		await LayerxfUA509f.addStakePayment.call({from: accounts[2]});
		const uintpWwYUjA = await LayerxfUA509f.totalSupply.call({from: accounts[2]});
		const uintQWOobG7 = await LayerxfUA509f.allowance.call(addressmTgXqeh, addresssRUzuF0, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxfUA509f.unlock.call({from: accounts[1]});

		await expect(LayerxfUA509f.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspSUYUiB = accounts[0]
		const LayerxfUA509f = await Layerx.new(addresspSUYUiB, {from: accounts[4]});
		const addressDhpSZlX = accounts[4]
		const addresseZd9T9U = await LayerxfUA509f.transferOwnership.call(addressDhpSZlX, {from: accounts[0]});
		await LayerxfUA509f.addStakePayment.call({from: accounts[0]});

		await expect(LayerxfUA509f.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresslK7zaYC = accounts[1]
		const Layerxi9419O = await Layerx.new(addresslK7zaYC, {from: accounts[0]});
		const addressMMRprVB = accounts[0]
		const uintFGo6B3m = BigInt("1851")
		const uintqszXbBx = BigInt("1189")
		const addressgrqw9Af = await Layerxi9419O.setNewStakeCreator.call(addressMMRprVB, {from: accounts[1]});
		const uintB9zirX = await Layerxi9419O.withdraw.call(uintFGo6B3m, {from: accounts[4]});
		const uint256wVglD6 = await Layerxi9419O.burn.call(uintqszXbBx, {from: accounts[1]});

		await expect(Layerxi9419O.withdraw.call(uintFGo6B3m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})