const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringzfnn9iZ = "ANFgJBmqULtlOh3rDPDE2yBHEhz3MJClRXQEvQy77drX8ThioT4BCeeJqglLk1EUzpcm55rD4X8J0rB2tlzraz1PS34iQO"
		const addressE4Vrhpl = accounts[2]
		const addressWDqOD2C = accounts[4]
		const uintUFxt3dz = BigInt("1219")
		const uintZjEZaCT = BigInt("1155")
		const Liquidity_v8LSnisHS = await Liquidity_v8.new(stringzfnn9iZ, addressE4Vrhpl, addressWDqOD2C, uintUFxt3dz, uintZjEZaCT, {from: accounts[0]});
		const addressWSd6fG = accounts[0]
		const addressyK2HWW = accounts[0]
		const uintqv9aJjf = BigInt("1204")
		const addressafrCUK2 = accounts[4]
		const uintfHIdJOu = BigInt("560")
		const addressulWxPx5 = await Liquidity_v8LSnisHS.transferOwnership.call(addressWSd6fG, {from: accounts[1]});
		const 
MesFnCJ = await Liquidity_v8LSnisHS._hasAllowance.call(addressafrCUK2, uintqv9aJjf, addressyK2HWW, {from: accounts[1]});
		const uint256jwmuz9K = await Liquidity_v8LSnisHS.changeLockDuration.call(uintfHIdJOu, {from: accounts[2]});
		await Liquidity_v8LSnisHS.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringareqv8m = "tgSJvICG9esBssZwEMxPMjdp6kQAcg5TvlupiRaVqoUHcgMKXQpPAWT9xpphh3Qyz8XmVYVvOD8QkNjHdUvID5VYm4jGvBCoSY"
		const address1vQhd7 = accounts[4]
		const addressxnYP0ok = accounts[2]
		const uintEg7b2JT = BigInt("1682")
		const uint3fl8My = BigInt("436")
		const Liquidity_v8L05jc8 = await Liquidity_v8.new(stringareqv8m, address1vQhd7, addressxnYP0ok, uintEg7b2JT, uint3fl8My, {from: accounts[3]});
		const uintuDOKrQd = BigInt("931")
		const uintm6Gyn7V = BigInt("1725")
		const addressZCqZhB = accounts[1]
		const addressvXt6i03 = accounts[3]
		const boolqtTegp6 = await Liquidity_v8L05jc8.addReward.call(uintuDOKrQd, {from: accounts[3]});
		const uint2562zrcZT = await Liquidity_v8L05jc8.changeLockDuration.call(uintm6Gyn7V, {from: accounts[0]});
		await Liquidity_v8L05jc8.renounceOwnership.call({from: accounts[4]});
		const uint256LHeQN0t = await Liquidity_v8L05jc8.calculate.call(addressZCqZhB, {from: accounts[1]});
		const 
bXpHpmN = await Liquidity_v8L05jc8.userDeposits.call(addressvXt6i03, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringpvVRq0 = "9UIap2JWfPraqnA8bg6NC9jKFR9GSaC6GZmI799gISPa9JZf59wDaD3YrppBymnUq8IvirV7qCsNdcCzGAPEd37KjCx"
		const addressizbVxA = accounts[4]
		const addressY0fbWT2 = accounts[2]
		const uintExQxrH5 = BigInt("1741")
		const uintjNxDtt4 = BigInt("1929")
		const Liquidity_v8kSnaWm = await Liquidity_v8.new(stringpvVRq0, addressizbVxA, addressY0fbWT2, uintExQxrH5, uintjNxDtt4, {from: accounts[1]});
		const uinta06seqo = BigInt("1493")
		const addressCaSbbZG = accounts[2]
		const addressa6lvAR = await Liquidity_v8kSnaWm.owner.call({from: accounts[5]});
		const uint64GHiYBUo = await Liquidity_v8kSnaWm.setRate.call(uinta06seqo, {from: accounts[3]});
		const addressaFrKU9F = await Liquidity_v8kSnaWm.transferOwnership.call(addressCaSbbZG, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringA9dug3U = "TKu7RCe2QOslUESjwYTSxHeP5j3POkDKM6SLIsoc1IGQJd51"
		const addressOqDh3z = accounts[4]
		const addressyLNyi0l = "0x0000000000000000000000000000000000000001"
		const uintFxB6Rng = BigInt("663")
		const uintI1u4TFO = BigInt("1802")
		const Liquidity_v8vZIJ5T = await Liquidity_v8.new(stringA9dug3U, addressOqDh3z, addressyLNyi0l, uintFxB6Rng, uintI1u4TFO, {from: "0x0000000000000000000000000000000000000001"});
		const uintlmKWLTt = BigInt("372")
		const uintXs5knRb = BigInt("117")
		const addressE0rCyD4 = accounts[1]
		const uint256W37Bc2 = await Liquidity_v8vZIJ5T.changeLockDuration.call(uintlmKWLTt, {from: accounts[2]});
		const uint256iQWfLYS = await Liquidity_v8vZIJ5T.changeLockDuration.call(uintXs5knRb, {from: accounts[4]});
		const 
c52YtL8 = await Liquidity_v8vZIJ5T.userDeposits.call(addressE0rCyD4, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const string82WQ1r = "9mMam8mWKdO14qxCvGx7Q43XaRlpkP6oM8vabFpRAhGLJk7vRNsj20OrtVpOmYxLklKnlndOEEyFbjt6Rsooj0esL"
		const addressXmUEEL4 = accounts[2]
		const addressW9nxs2Q = accounts[3]
		const uintUcuUoIG = BigInt("346")
		const uintVKGa0wk = BigInt("494")
		const Liquidity_v8WV2uqsU = await Liquidity_v8.new(string82WQ1r, addressXmUEEL4, addressW9nxs2Q, uintUcuUoIG, uintVKGa0wk, {from: accounts[2]});
		const addressL8aDYZP = await Liquidity_v8WV2uqsU.owner.call({from: accounts[2]});
		await Liquidity_v8WV2uqsU.onlyOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW418V5c = "85tSRgwQMbHLmpY5pM5MTJVyU8NkhhsvDLpSEljsKXn8iVGbnMrRWgULzCsr4obAQekUY"
		const addresssgTKK7q = "0x0000000000000000000000000000000000000001"
		const addressc2OoFV1 = accounts[0]
		const uintYgI5yq4 = BigInt("1911")
		const uinthuvdcg9 = BigInt("1685")
		const Liquidity_v8Fde1brq = await Liquidity_v8.new(stringW418V5c, addresssgTKK7q, addressc2OoFV1, uintYgI5yq4, uinthuvdcg9, {from: accounts[1]});
		const addressWuYbDAv = accounts[2]
		const addressHdi7Cpk = accounts[5]
		const addressuZz7Me = accounts[4]
		const addressk1A27zq = accounts[2]
		const uint256swzA848 = await Liquidity_v8Fde1brq.calculate.call(addressWuYbDAv, {from: accounts[3]});
		const addressZEiISgd = await Liquidity_v8Fde1brq.transferOwnership.call(addressHdi7Cpk, {from: accounts[4]});
		const uint256aqpct9C = await Liquidity_v8Fde1brq.calculate.call(addressuZz7Me, {from: accounts[0]});
		await Liquidity_v8Fde1brq.renounceOwnership.call({from: accounts[2]});
		const 
klzqFCj = await Liquidity_v8Fde1brq.userDeposits.call(addressk1A27zq, {from: accounts[1]});
		const boolh8e8ZAZ = await Liquidity_v8Fde1brq.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW418V5c = "85tSRgwQMbHLmpY5pM5MTJVyU8NkhhsvDLpSEljsKXn8iVGbnMrRWgULzCsr4obAQekUY"
		const addresso8uMDim = "0x0000000000000000000000000000000000000001"
		const addressnFye2O7 = accounts[0]
		const uintuVaZ0V3 = BigInt("1911")
		const uintSyghFKY = BigInt("1685")
		const Liquidity_v8Fde1brq = await Liquidity_v8.new(stringW418V5c, addresso8uMDim, addressnFye2O7, uintuVaZ0V3, uintSyghFKY, {from: accounts[1]});
		const addressHcuVsGE = accounts[2]
		const addresseDqQkDi = accounts[1]
		const addressFNCwMSC = accounts[5]
		const addresssOkof98 = accounts[4]
		const addressdO7ald2 = accounts[2]
		const addressXxIh4t = accounts[3]
		const uint256swzA848 = await Liquidity_v8Fde1brq.calculate.call(addressHcuVsGE, {from: accounts[3]});
		const 
QAmZwts = await Liquidity_v8Fde1brq.userDeposits.call(addresseDqQkDi, {from: accounts[4]});
		const addressZEiISgd = await Liquidity_v8Fde1brq.transferOwnership.call(addressFNCwMSC, {from: accounts[4]});
		const uint256aqpct9C = await Liquidity_v8Fde1brq.calculate.call(addresssOkof98, {from: accounts[0]});
		const uint256uxC3HeL = await Liquidity_v8Fde1brq.calculate.call(addressdO7ald2, {from: accounts[1]});
		await Liquidity_v8Fde1brq.renounceOwnership.call({from: accounts[2]});
		const 
klzqFCj = await Liquidity_v8Fde1brq.userDeposits.call(addressXxIh4t, {from: accounts[1]});
		const boolh8e8ZAZ = await Liquidity_v8Fde1brq.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW418V5c = "85tSRgwQMbHLmpY5pM5MTJVyU8NkhhsvDLpSEljsKXn8iVGbnMrRWgULzCsr4obAQekUY"
		const addressme46aNM = "0x0000000000000000000000000000000000000001"
		const addressaiJ0vVJ = accounts[0]
		const uintPbf3Flw = BigInt("1911")
		const uint4gDG9Q = BigInt("1685")
		const Liquidity_v8Fde1brq = await Liquidity_v8.new(stringW418V5c, addressme46aNM, addressaiJ0vVJ, uintPbf3Flw, uint4gDG9Q, {from: accounts[1]});
		const addressVtdyZ2Y = accounts[2]
		const addressaRjrUDK = accounts[5]
		const addressecgCrDO = accounts[5]
		const addressxWllyO1 = accounts[2]
		const uintIIjBuY0 = BigInt("1449")
		const boolTA3IaF3 = await Liquidity_v8Fde1brq.emergencyWithdraw.call({from: accounts[4]});
		const uint256swzA848 = await Liquidity_v8Fde1brq.calculate.call(addressVtdyZ2Y, {from: accounts[3]});
		const addressZEiISgd = await Liquidity_v8Fde1brq.transferOwnership.call(addressaRjrUDK, {from: accounts[4]});
		const uint256aqpct9C = await Liquidity_v8Fde1brq.calculate.call(addressecgCrDO, {from: accounts[0]});
		const 
klzqFCj = await Liquidity_v8Fde1brq.userDeposits.call(addressxWllyO1, {from: accounts[1]});
		const uint64Qkj4F5S = await Liquidity_v8Fde1brq.setRate.call(uintIIjBuY0, {from: accounts[5]});
		const boolh8e8ZAZ = await Liquidity_v8Fde1brq.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgFV2S8i = "WYVifEFSvUeUEdHtAAVsd51ME03APfQ7VYTeuq4PWNrawfEM1aYqqjIFAhec0B4TWx3Il1VDUxcHvoSNA7g1k4O"
		const addressmdXC4MA = accounts[1]
		const addressecShWw = accounts[3]
		const uintlUr1Syc = BigInt("1088")
		const uintzSocpoM = BigInt("337")
		const Liquidity_v8qnW8Iaq = await Liquidity_v8.new(stringgFV2S8i, addressmdXC4MA, addressecShWw, uintlUr1Syc, uintzSocpoM, {from: accounts[3]});
		const addressTWKj3R3 = accounts[1]
		const uintynsm1ux = BigInt("1835")
		const uintgUby4qz = BigInt("1684")
		const addressvyPUaN = accounts[0]
		const addressL7p5Ia0 = accounts[3]
		const 
iQZVftK = await Liquidity_v8qnW8Iaq.userDeposits.call(addressTWKj3R3, {from: accounts[2]});
		const boolCGg8WMe = await Liquidity_v8qnW8Iaq.withdraw.call({from: accounts[1]});
		const boolGAE9wJa = await Liquidity_v8qnW8Iaq.stake.call(uintynsm1ux, {from: accounts[5]});
		const uint64PLlfi2 = await Liquidity_v8qnW8Iaq.setRate.call(uintgUby4qz, {from: accounts[5]});
		const addresskg1DrXf = await Liquidity_v8qnW8Iaq.transferOwnership.call(addressvyPUaN, {from: "0x0000000000000000000000000000000000000001"});
		const addressRItE5o3 = await Liquidity_v8qnW8Iaq.transferOwnership.call(addressL7p5Ia0, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringW418V5c = "85tSRgwQMbHLmpY5pM5MTJVyU8NkhhsvDLpSEljsKXn8iVGbnMrRWgULzCsr4obAQekUY"
		const addressXySOTv5 = "0x0000000000000000000000000000000000000001"
		const addressubI0jIJ = accounts[0]
		const uintfsge57P = BigInt("1911")
		const uintYzMwIuh = BigInt("1685")
		const Liquidity_v8Fde1brq = await Liquidity_v8.new(stringW418V5c, addressXySOTv5, addressubI0jIJ, uintfsge57P, uintYzMwIuh, {from: accounts[1]});
		const addressBSbFeH = accounts[2]
		const uintJs9y7fA = BigInt("923")
		const addressrJUnuev = accounts[4]
		const addressLvjLT6w = accounts[5]
		const uintR4mVFix = BigInt("1027")
		const uintkueFeMm = BigInt("1968")
		const addressjtNNavn = accounts[4]
		const addressqoCxMy = accounts[2]
		const addresskLSQygo = accounts[3]
		const uint256swzA848 = await Liquidity_v8Fde1brq.calculate.call(addressBSbFeH, {from: accounts[3]});
		const uint64L8sWaMO = await Liquidity_v8Fde1brq.setRate.call(uintJs9y7fA, {from: accounts[1]});
		const 
s113yT8 = await Liquidity_v8Fde1brq.userDeposits.call(addressrJUnuev, {from: accounts[4]});
		const addressZEiISgd = await Liquidity_v8Fde1brq.transferOwnership.call(addressLvjLT6w, {from: accounts[4]});
		const uint64GxhOPoR = await Liquidity_v8Fde1brq.setRate.call(uintR4mVFix, {from: accounts[0]});
		const boolE9Y2lU1 = await Liquidity_v8Fde1brq.stake.call(uintkueFeMm, {from: accounts[4]});
		const uint256aqpct9C = await Liquidity_v8Fde1brq.calculate.call(addressjtNNavn, {from: accounts[0]});
		const uint256uxC3HeL = await Liquidity_v8Fde1brq.calculate.call(addressqoCxMy, {from: accounts[1]});
		await Liquidity_v8Fde1brq.renounceOwnership.call({from: accounts[2]});
		const 
klzqFCj = await Liquidity_v8Fde1brq.userDeposits.call(addresskLSQygo, {from: accounts[1]});
		const boolh8e8ZAZ = await Liquidity_v8Fde1brq.withdraw.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringDEuYzAE = "vlEYpODXKHXSpFEBBp3D8m"
		const addresskLV067 = accounts[2]
		const addressZbMM2E0 = accounts[0]
		const uinteCTDBPw = BigInt("1132")
		const uintOWhl0ji = BigInt("277")
		const Liquidity_v8dZrx35 = await Liquidity_v8.new(stringDEuYzAE, addresskLV067, addressZbMM2E0, uinteCTDBPw, uintOWhl0ji, {from: accounts[3]});
		await Liquidity_v8dZrx35.renounceOwnership.call({from: accounts[3]});
		const boolM9CaVcU = await Liquidity_v8dZrx35.isOwner.call({from: accounts[3]});
		const addressbVrlHzF = await Liquidity_v8dZrx35.owner.call({from: accounts[0]});
		const boolFlBIgx2 = await Liquidity_v8dZrx35.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCLCKbuh = await Liquidity_v8dZrx35.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQyn49a4 = await Liquidity_v8dZrx35.isOwner.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringop4vXjN = "lafNOGGSzcqs4MqpbIUBsp9aSNsWx93NAkHAdChMmAiUnlZR8CdPwJza4Z7GSpjdEPlUDEfQ3TpCjedfebegN"
		const addressYmERnCt = "0x0000000000000000000000000000000000000001"
		const addressfw9cDq1 = accounts[3]
		const uintrrA2VeP = BigInt("1864")
		const uintrhV6xg = BigInt("189")
		const Liquidity_v8jl27lfG = await Liquidity_v8.new(stringop4vXjN, addressYmERnCt, addressfw9cDq1, uintrrA2VeP, uintrhV6xg, {from: accounts[2]});
		const addressvjLT2gN = accounts[4]
		const addressvO1QwPl = accounts[3]
		const uint256gANki4O = await Liquidity_v8jl27lfG.calculate.call(addressvjLT2gN, {from: accounts[4]});
		const address0HN7f3 = await Liquidity_v8jl27lfG.transferOwnership.call(addressvO1QwPl, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringgFV2S8i = "WYVifEFSvUeUEdHtAAVsd51ME03APfQ7VYTeuq4PWNrawfEM1aYqqjIFAhec0B4TWx3Il1VDUxcHvoSNA7g1k4O"
		const addressxsOO2wR = accounts[1]
		const addressf2BJzZE = accounts[3]
		const uintTobRgTn = BigInt("1088")
		const uintKwktOt = BigInt("337")
		const Liquidity_v8qnW8Iaq = await Liquidity_v8.new(stringgFV2S8i, addressxsOO2wR, addressf2BJzZE, uintTobRgTn, uintKwktOt, {from: accounts[3]});
		const uintuCWy7C6 = BigInt("233")
		const addressZtN1qE = accounts[2]
		const uintcY7Sgdo = BigInt("1835")
		const uinttabMoSW = BigInt("1357")
		const addressAGO66Qq = accounts[1]
		const uintUiPCPZk = BigInt("1926")
		const addressJwMxteL = accounts[3]
		const uintQNgKBk5 = BigInt("1684")
		const addressydBsqbR = accounts[0]
		const addressKjcrpM = accounts[3]
		const uint256RYPAaWt = await Liquidity_v8qnW8Iaq.changeLockDuration.call(uintuCWy7C6, {from: accounts[3]});
		const 
iQZVftK = await Liquidity_v8qnW8Iaq.userDeposits.call(addressZtN1qE, {from: accounts[2]});
		const boolCGg8WMe = await Liquidity_v8qnW8Iaq.withdraw.call({from: accounts[1]});
		const boolGAE9wJa = await Liquidity_v8qnW8Iaq.stake.call(uintcY7Sgdo, {from: accounts[5]});
		const boolDcHHjA = await Liquidity_v8qnW8Iaq.stake.call(uinttabMoSW, {from: accounts[2]});
		const 
suZYuIm = await Liquidity_v8qnW8Iaq._hasAllowance.call(addressJwMxteL, uintUiPCPZk, addressAGO66Qq, {from: accounts[0]});
		const uint64PLlfi2 = await Liquidity_v8qnW8Iaq.setRate.call(uintQNgKBk5, {from: accounts[5]});
		const addresskg1DrXf = await Liquidity_v8qnW8Iaq.transferOwnership.call(addressydBsqbR, {from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8qnW8Iaq.onlyOwner.call({from: accounts[4]});
		const addressRItE5o3 = await Liquidity_v8qnW8Iaq.transferOwnership.call(addressKjcrpM, {from: accounts[4]});
	});
})