const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringE1XX0G = "k197qEwh6yJk7vGt2gllniCljQu9IM5OVsaHYguE3s9KTymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck"
		const addressP3rSYmF = accounts[2]
		const addresss6pHpmo = accounts[2]
		const uintg6TDDIb = BigInt("437")
		const uintCqfk8HB = BigInt("524")
		const Liquidity_v8aZhSU4j = await Liquidity_v8.new(stringE1XX0G, addressP3rSYmF, addresss6pHpmo, uintg6TDDIb, uintCqfk8HB, {from: accounts[5]});
		const uintzdJ0KRf = BigInt("1667")
		const addressribGRa7 = accounts[0]
		const addressGwQCfdQ = accounts[4]
		const uintelYHJJ = BigInt("86")
		const uint64BvCX8cw = await Liquidity_v8aZhSU4j.setRate.call(uintzdJ0KRf, {from: accounts[1]});
		await Liquidity_v8aZhSU4j.renounceOwnership.call({from: accounts[3]});
		const uint256M9mFRaU = await Liquidity_v8aZhSU4j.calculate.call(addressribGRa7, {from: "0x0000000000000000000000000000000000000001"});
		const 
FsRqZWf = await Liquidity_v8aZhSU4j.userDeposits.call(addressGwQCfdQ, {from: accounts[3]});
		const boolJpweQrP = await Liquidity_v8aZhSU4j.stake.call(uintelYHJJ, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringKhZ95Pf = "mIINNmfJqVAOOPmBswseUq0cpf4IE3pmS9FliNmBrwOXXqckYWTcWmyANrcEhNYeU3lHJOr3Rls43GMxuxDNY1fsRtVooFT"
		const addressn78tGfS = accounts[0]
		const addressDpoY3rz = accounts[0]
		const uintJCuBmT = BigInt("75")
		const uintMkbd9U7 = BigInt("43")
		const Liquidity_v8ATzOa9b = await Liquidity_v8.new(stringKhZ95Pf, addressn78tGfS, addressDpoY3rz, uintJCuBmT, uintMkbd9U7, {from: accounts[4]});
		const addressEE4wLxc = accounts[3]
		const uintrlOqvLo = BigInt("406")
		const addressCy2T6t = accounts[3]
		const addressmOJMy3 = accounts[3]
		const uintICKhLih = BigInt("1438")
		const 
qBgk3zz = await Liquidity_v8ATzOa9b._hasAllowance.call(addressCy2T6t, uintrlOqvLo, addressEE4wLxc, {from: accounts[4]});
		const addressNaaes8P = await Liquidity_v8ATzOa9b.transferOwnership.call(addressmOJMy3, {from: accounts[4]});
		await Liquidity_v8ATzOa9b.onlyOwner.call({from: accounts[4]});
		const boolQdFY4pC = await Liquidity_v8ATzOa9b.emergencyWithdraw.call({from: accounts[0]});
		const booljKebIjZ = await Liquidity_v8ATzOa9b.addReward.call(uintICKhLih, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringw6ovXyd = "Lj3rTiYIMwaK5uqIo2tdTQy6eCzmQJghM55VXqP0tL9Qve8yzxUcz"
		const addressKcWSpu1 = accounts[2]
		const addresslYtexoR = "0x0000000000000000000000000000000000000001"
		const uintn4wEvxM = BigInt("1159")
		const uintRQWr9hD = BigInt("1796")
		const Liquidity_v8PHqrMbO = await Liquidity_v8.new(stringw6ovXyd, addressKcWSpu1, addresslYtexoR, uintn4wEvxM, uintRQWr9hD, {from: accounts[3]});
		const uintRMFpEE8 = BigInt("1295")
		const addressqXcwLPN = await Liquidity_v8PHqrMbO.owner.call({from: accounts[4]});
		const boolpJSgtC = await Liquidity_v8PHqrMbO.emergencyWithdraw.call({from: accounts[4]});
		const boolw196Z97 = await Liquidity_v8PHqrMbO.addReward.call(uintRMFpEE8, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXc0WrPk = "dhzix5VikO0yzsyYgb6qKvvr05kGcavkJdyhsToZdaUOqqUAKOCfG8N9z7xhNRvtDlD9o20RVlqQoQ3e"
		const address1VkRM7 = accounts[1]
		const addressogbrzTa = accounts[4]
		const uintYdG1nM8 = BigInt("383")
		const uintWgv5kCh = BigInt("487")
		const Liquidity_v8Jjd1lQe = await Liquidity_v8.new(stringXc0WrPk, address1VkRM7, addressogbrzTa, uintYdG1nM8, uintWgv5kCh, {from: accounts[1]});
		const addresscYGRlLW = accounts[4]
		const uintG9TqASr = BigInt("285")
		const uintdWygnQG = BigInt("300")
		const uint256aXIb67H = await Liquidity_v8Jjd1lQe.calculate.call(addresscYGRlLW, {from: accounts[5]});
		const addressfoYfrqQ = await Liquidity_v8Jjd1lQe.owner.call({from: accounts[5]});
		const uint64Miu8Cog = await Liquidity_v8Jjd1lQe.setRate.call(uintG9TqASr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bIkFSdu = await Liquidity_v8Jjd1lQe.changeLockDuration.call(uintdWygnQG, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringSuQiSlo = "PVw"
		const addressi9RgJEZ = accounts[3]
		const addressuqHCZIb = accounts[5]
		const uintjZ46LE5 = BigInt("126")
		const uinteUGMlmR = BigInt("316")
		const Liquidity_v8OWN6XZ = await Liquidity_v8.new(stringSuQiSlo, addressi9RgJEZ, addressuqHCZIb, uintjZ46LE5, uinteUGMlmR, {from: accounts[0]});
		const addressZyHaHep = accounts[3]
		const uintKUK6RvK = BigInt("1573")
		const 
zwVlaH9 = await Liquidity_v8OWN6XZ.userDeposits.call(addressZyHaHep, {from: accounts[3]});
		await Liquidity_v8OWN6XZ.onlyOwner.call({from: accounts[1]});
		await Liquidity_v8OWN6XZ.onlyOwner.call({from: accounts[0]});
		await Liquidity_v8OWN6XZ.renounceOwnership.call({from: accounts[4]});
		const boolW0j6CKA = await Liquidity_v8OWN6XZ.stake.call(uintKUK6RvK, {from: accounts[3]});
		const boolI1B64zT = await Liquidity_v8OWN6XZ.emergencyWithdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringC71xL0v = "sXYpqkheh6OfVPhNgcQf1yaneSqZz4eiG"
		const addressev9oI8X = accounts[1]
		const addressd5JTYE8 = accounts[0]
		const uintjVMjIAB = BigInt("99")
		const uintJAFOCC = BigInt("853")
		const Liquidity_v8WXWlEzU = await Liquidity_v8.new(stringC71xL0v, addressev9oI8X, addressd5JTYE8, uintjVMjIAB, uintJAFOCC, {from: accounts[1]});
		const uintS0lKENo = BigInt("1136")
		const uintwF9YBC = BigInt("1422")
		const uintpbyzEMH = BigInt("1066")
		const boolzcwAoku = await Liquidity_v8WXWlEzU.stake.call(uintS0lKENo, {from: accounts[4]});
		const uint256lwuklhn = await Liquidity_v8WXWlEzU.changeLockDuration.call(uintwF9YBC, {from: accounts[4]});
		const uint64FiNgUM7 = await Liquidity_v8WXWlEzU.setRate.call(uintpbyzEMH, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringt2ZweNx = "lER4Gb8E3xF2uaVF54qCFAAmymWHH5UOPowTrxBItWLgpEMZ0MUqwL0vB8brH5LTksltal1TLEdAeNmC6DzWeMfDF6"
		const addressR0K9HFT = accounts[2]
		const addressd1Tfdo7 = accounts[4]
		const uintiicgxec = BigInt("84")
		const uintuYXqpN3 = BigInt("1624")
		const Liquidity_v8zUUz2Jf = await Liquidity_v8.new(stringt2ZweNx, addressR0K9HFT, addressd1Tfdo7, uintiicgxec, uintuYXqpN3, {from: accounts[1]});
		const uintLZmk347 = BigInt("941")
		const uintX39K3N6 = BigInt("59")
		const uintVmgnoZv = BigInt("1840")
		await Liquidity_v8zUUz2Jf.renounceOwnership.call({from: accounts[1]});
		const bool81H3St = await Liquidity_v8zUUz2Jf.emergencyWithdraw.call({from: accounts[3]});
		const boolDCcue9I = await Liquidity_v8zUUz2Jf.addReward.call(uintLZmk347, {from: accounts[2]});
		const uint64IbOhGXp = await Liquidity_v8zUUz2Jf.setRate.call(uintX39K3N6, {from: accounts[5]});
		const boolGOPyM0L = await Liquidity_v8zUUz2Jf.emergencyWithdraw.call({from: accounts[4]});
		const boolWbHi8Ei = await Liquidity_v8zUUz2Jf.addReward.call(uintVmgnoZv, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringC71xL0v = "sXYpqkheh6OfVPhNgcQf1yaneSqZz4eiG"
		const addressnLSxqq = accounts[1]
		const addresseflOrdY = accounts[0]
		const uintnY20hK = BigInt("99")
		const uintXbkKAgA = BigInt("853")
		const Liquidity_v8WXWlEzU = await Liquidity_v8.new(stringC71xL0v, addressnLSxqq, addresseflOrdY, uintnY20hK, uintXbkKAgA, {from: accounts[1]});
		const uintwlH2pKM = BigInt("1422")
		const boolwbFfDoP = await Liquidity_v8WXWlEzU.withdraw.call({from: accounts[1]});
		const uint256lwuklhn = await Liquidity_v8WXWlEzU.changeLockDuration.call(uintwlH2pKM, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringC71xL0v = "sXYpqkheh6OfVPhNgcQf1yaneSqZz4eiG"
		const addressa0g9Nm = accounts[1]
		const addressVazZjD7 = accounts[0]
		const uintiBuVz5 = BigInt("99")
		const uintFEdX993 = BigInt("853")
		const Liquidity_v8WXWlEzU = await Liquidity_v8.new(stringC71xL0v, addressa0g9Nm, addressVazZjD7, uintiBuVz5, uintFEdX993, {from: accounts[1]});
		const uintyPRvfAP = BigInt("919")
		const uintTpqz6J6 = BigInt("1427")
		const uint256kkHcv4M = await Liquidity_v8WXWlEzU.changeLockDuration.call(uintyPRvfAP, {from: accounts[1]});
		const uint256lwuklhn = await Liquidity_v8WXWlEzU.changeLockDuration.call(uintTpqz6J6, {from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringGzGUeZw = "JY3l9oieoeE15wdfOQGplfVrvyc4ukTq1Udca6IDNQtN4kaYIzPiBHvhB22rtVhpnLhixeI"
		const addressSCYnGS9 = accounts[2]
		const addresssIx7oCh = accounts[3]
		const uintF3hBmQR = BigInt("889")
		const uintTdorqAw = BigInt("1655")
		const Liquidity_v8plwXFcJ = await Liquidity_v8.new(stringGzGUeZw, addressSCYnGS9, addresssIx7oCh, uintF3hBmQR, uintTdorqAw, {from: "0x0000000000000000000000000000000000000001"});
		const uintMIDMH3g = BigInt("781")
		const addressCL4pCIa = accounts[1]
		const uintlvK2C1k = BigInt("530")
		const boolDP9V6R0 = await Liquidity_v8plwXFcJ.addReward.call(uintMIDMH3g, {from: accounts[3]});
		const uint256UFRIRp8 = await Liquidity_v8plwXFcJ.calculate.call(addressCL4pCIa, {from: accounts[3]});
		const uint256ZXOaVNz = await Liquidity_v8plwXFcJ.changeLockDuration.call(uintlvK2C1k, {from: accounts[1]});
		await Liquidity_v8plwXFcJ.onlyOwner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringispKOBQ = "vKGK9wIxBd4rgu8T7dc36b9h3QeMKL1r5oX7VzVbjCHjz9R7j8NFhvfQwi11TIsDbuTH9nchp4MHzb"
		const addressjid4Yk9 = accounts[3]
		const addressuVu8XpF = accounts[3]
		const uintw7RNgRp = BigInt("714")
		const uintwNhQsT9 = BigInt("1603")
		const Liquidity_v8UB1sHlp = await Liquidity_v8.new(stringispKOBQ, addressjid4Yk9, addressuVu8XpF, uintw7RNgRp, uintwNhQsT9, {from: accounts[3]});
		const uintBaqWLp = BigInt("2000")
		const uintehoCcbS = BigInt("505")
		const uint64DkjklRu = await Liquidity_v8UB1sHlp.setRate.call(uintBaqWLp, {from: accounts[3]});
		await Liquidity_v8UB1sHlp.renounceOwnership.call({from: accounts[4]});
		const boolzQDB1FF = await Liquidity_v8UB1sHlp.stake.call(uintehoCcbS, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringispKOBQ = "vKGK9wIxBd4rgu8T7dc36b9h3QeMKL1r5oX7VzVbjCHjz9R7j8NFhvfQwi11TIsDbuTH9nchp4MHzb"
		const addressQIKpC7X = accounts[3]
		const addressSKi634A = accounts[3]
		const uintkHo3Rlj = BigInt("714")
		const uintTBsjocL = BigInt("1603")
		const Liquidity_v8UB1sHlp = await Liquidity_v8.new(stringispKOBQ, addressQIKpC7X, addressSKi634A, uintkHo3Rlj, uintTBsjocL, {from: accounts[3]});
		const addressVCEA2tY = accounts[4]
		const addresscUXevTF = accounts[4]
		const 
MuFUAGc = await Liquidity_v8UB1sHlp.userDeposits.call(addressVCEA2tY, {from: accounts[3]});
		const addressWSNBtTz = await Liquidity_v8UB1sHlp.transferOwnership.call(addresscUXevTF, {from: accounts[3]});
	});
})