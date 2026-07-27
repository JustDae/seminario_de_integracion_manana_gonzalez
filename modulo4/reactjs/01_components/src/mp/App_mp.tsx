import WelcomeBanner_mp from './components_mp/WelcomeBanner_mp'
import ProductCard_mp from './components_mp/ProductCard_mp'
import FruitList_mp from './components_mp/FruitList_mp'
import DigitalCounter_mp from './01_usestate_mp/DigitalCounter_mp'
import SafeCounter_mp from './01_usestate_mp/SafeCounter_mp'
import TaskManager_mp from './01_usestate_mp/TaskManager_mp'
import UserProfileForm_mp from './01_usestate_mp/UserProfileForm_mp'
import DocumentTitle_mp from './02_useEffect_mp/DocumentTitle_mp'
import FetchUser_mp from './02_useEffect_mp/FetchUser_mp'
import FetchUsers_mp from './02_useEffect_mp/FetchUsers_mp'
import AutoFocusForm_mp from './03_useRef_mp/AutoFocusForm_mp'
import InlineEditor_mp from './03_useRef_mp/InlineEditor_mp'

function App_mp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <WelcomeBanner_mp />
      
      <h2>1. UseState</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <DigitalCounter_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <SafeCounter_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <UserProfileForm_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <TaskManager_mp />
        </div>
      </div>

      <h2>2. UseEffect</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <DocumentTitle_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <FetchUser_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <FetchUsers_mp />
        </div>
      </div>

      <h2>3. UseRef</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <AutoFocusForm_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <InlineEditor_mp />
        </div>
      </div>

      <h2>4. Componentes Básicos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <FruitList_mp />
        </div>
        <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <ProductCard_mp 
            title="Boleto Interprovincial" 
            price={5.50} 
            description="Viaje directo sin paradas a la ciudadela central." 
          />
        </div>
      </div>
    </div>
  )
}

export default App_mp
